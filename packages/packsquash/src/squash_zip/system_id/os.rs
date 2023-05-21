//! OS-specific functions to get PackSquash system IDs.

#[cfg(all(unix, not(target_os = "macos")))]
use std::{fs, io, path::Path};

use super::SystemId;

/// Gets the D-Bus and/or systemd generated machine ID. This machine ID is
/// 128-bit wide, and is intended to be constant for all the lifecycle of the
/// OS install, no matter if hardware is replaced or some configuration is
/// changed.
///
/// Although originally Linux-specific, D-Bus can be run in BSD derivatives,
/// and Linux is pretty influential in the Unix world, so it's worth trying
/// on most Unix-like systems.
///
/// Further reading:
/// - <https://www.freedesktop.org/software/systemd/man/machine-id.html>
/// - <https://unix.stackexchange.com/questions/396052/missing-etc-machine-id-on-freebsd-trueos-dragonfly-bsd-et-al>
#[cfg(all(unix, not(target_os = "macos"), not(target_os = "android")))]
pub(super) fn get_dbus_machine_id() -> Option<SystemId> {
	u128::from_str_radix(
		read_uuid_file("/etc/machine-id")
			.or_else(|_| read_uuid_file("/var/lib/dbus/machine-id"))
			.or_else(|_| read_uuid_file("/var/db/dbus/machine-id"))
			.or_else(|_| read_uuid_file("/usr/local/etc/machine-id"))
			.or_else(|_| read_uuid_file("/run/machine-id"))
			.ok()?
			.trim(),
		16
	)
	.ok()
	.and_then(|id| SystemId::new(id, false, 200))
}

/// Gets the ID generated by the Linux kernel for the current boot. Although
/// it has the desirable properties of being 128-bit wide, userspace-agnostic,
/// and available in virtually every Linux kernel (at least from 2.2), it
/// changes in each boot, so it's pretty volatile. It relies on sysctl and
/// procfs being mounted at /proc.
///
/// Further reading:
/// - <https://www.kernel.org/doc/html/latest/admin-guide/sysctl/kernel.html#random>
/// - <http://0pointer.de/blog/projects/ids.html>
#[cfg(any(target_os = "linux", target_os = "android"))]
pub(super) fn get_boot_id() -> Option<SystemId> {
	use uuid::Uuid;

	SystemId::new(
		Uuid::parse_str(
			read_uuid_file("/proc/sys/kernel/random/boot_id")
				.ok()?
				.trim()
		)
		.ok()?
		.as_u128(),
		true,
		100
	)
}

/// Gets the host ID generated by a BSD kernel via sysctl system calls. Although
/// its precise generation method is not very well documented, it gives a D-Bus-like
/// machine ID, so it's a good fallback.
///
/// Further reading:
/// - <https://www.freebsd.org/cgi/man.cgi?query=sysctl&apropos=0&sektion=0&manpath=FreeBSD+14.0-current&arch=default&format=html>
/// - <https://unix.stackexchange.com/questions/396052/missing-etc-machine-id-on-freebsd-trueos-dragonfly-bsd-et-al>
/// - <https://github.com/netdata/netdata/issues/2682#issuecomment-327721829>
#[cfg(any(target_os = "freebsd", target_os = "dragonfly"))]
pub(super) fn get_kernel_host_id() -> Option<SystemId> {
	use std::{
		ffi::{CStr, CString},
		os::raw::{c_char, c_int, c_void},
		ptr
	};

	use uuid::Uuid;

	extern "C" {
		/// `int sysctlbyname(const char* name, void* oldp, size_t* oldlenp, void* newp, size_t newlen)`, from `#include <sys/sysctl.h>`.
		///
		/// Documentation: <https://www.freebsd.org/cgi/man.cgi?query=sysctlbyname&apropos=0&sektion=0&manpath=FreeBSD+14.0-current&arch=default&format=html>
		fn sysctlbyname(
			name: *const c_char,
			oldp: *mut c_void,
			oldlenp: *mut usize,
			newp: *const c_void,
			newlen: usize
		) -> c_int;
	}

	let kernel_host_uuid_key = CString::new("kern.hostuuid").unwrap();

	/// Size of the biggest standard UUID format, with dashes.
	const BUFFER_SIZE: usize = 36 + 1;
	let mut buf: [c_char; BUFFER_SIZE] = [0; BUFFER_SIZE];
	let mut buffer_size = BUFFER_SIZE;

	#[allow(unsafe_code)]
	match unsafe {
		sysctlbyname(
			kernel_host_uuid_key.as_ptr(),
			buf.as_mut_ptr() as *mut c_void,
			&mut buffer_size,
			ptr::null(),
			0
		)
	} {
		0 => SystemId::new(
			Uuid::parse_str(
				unsafe { CStr::from_ptr(&buf as *const c_char) }
					.to_str()
					.ok()?
			)
			.ok()?
			.as_u128(),
			false,
			200
		),
		// An error occurred
		_ => None
	}
}

/// Gets the product UUID from the Desktop Management Interface, which is BIOS-provided,
/// and is usually linked with the motherboard. This UUID is extremely persistent, even
/// across operating systems, but it is only found on PCs, and sometimes it is initialized
/// to dummy, unsafe values.
///
/// Further reading:
/// - <https://lists.freebsd.org/pipermail/freebsd-hackers/2007-February/019456.html>
#[cfg(any(target_os = "freebsd", target_os = "dragonfly"))]
pub(super) fn get_dmi_product_id() -> Option<SystemId> {
	use std::{
		ffi::{CStr, CString},
		os::raw::{c_char, c_int}
	};

	use uuid::Uuid;

	extern "C" {
		/// `int kenv(int action, const char* name, char* value, int len)`, from `#include <kenv.h>`.
		///
		/// Documentation: <https://www.freebsd.org/cgi/man.cgi?query=kenv&sektion=2&format=html>
		fn kenv(action: c_int, name: *const c_char, value: *mut c_char, len: c_int) -> c_int;
	}

	/// Constant for the KENV_GET action.
	///
	/// Source: <http://fxr.watson.org/fxr/source/sys/kenv.h?im=10>
	const KENV_GET: c_int = 0;

	/// Maximum value length.
	///
	/// Source: <http://fxr.watson.org/fxr/source/sys/kenv.h?im=10>
	const KENV_MVALLEN: usize = 128;

	let dmi_product_uuid_key = CString::new("smbios.system.uuid").unwrap();
	let mut buf = [0; KENV_MVALLEN + 1];

	#[allow(unsafe_code)]
	match unsafe {
		kenv(
			KENV_GET,
			dmi_product_uuid_key.as_ptr(),
			buf.as_mut_ptr(),
			buf.len() as c_int
		)
	} {
		// If 32 or 36 characters were written (+1 NUL terminator), it may be
		// a UUID, so try to parse it
		33 | 37 => SystemId::new(
			Uuid::parse_str(
				unsafe { CStr::from_ptr(&buf as *const c_char) }
					.to_str()
					.ok()?
			)
			.ok()?
			.as_u128(),
			false,
			150
		),
		// An error occurred, or we got something that is not an UUID
		_ => None
	}
}

/// Uses the Core Foundation and IOKit frameworks to get the `IOPlatformSerialNumber`
/// property of the `IOPlatformExpertDevice` service to get a machine ID. This represents
/// a unique serial number, somewhat similar to the DMI product UUID in conventional PCs.
/// Under rare circumstances, however, this ID may not be available. Also, its format is
/// not specified.
///
/// Further reading:
/// - <http://mirror.informatimago.com/next/developer.apple.com/technotes/tn/tn1103.html>
/// - <https://developer.apple.com/documentation/corefoundation/>
/// - <https://developer.apple.com/documentation/iokit/>
/// - <https://docs.rs/io-kit-sys/0.1.0/io_kit_sys/>
/// - <https://svartalf.info/posts/2019-05-31-poking-the-macos-io-kit-with-rust>
/// - <https://github.com/svartalf/rust-battery/blob/20233871e16b0e7083281df560875110a0cac93b/battery/src/platform/darwin/iokit/sys.rs>
/// - <https://github.com/servo/core-foundation-rs/blob/master/core-foundation>
#[cfg(target_os = "macos")]
#[allow(unsafe_code, non_camel_case_types)]
pub(super) fn get_platform_serial_number() -> Option<SystemId> {
	use std::{ffi::CString, os::raw::c_char};

	use core_foundation::{
		base::{kCFAllocatorDefault, mach_port_t, CFAllocatorRef, CFTypeRef, TCFType},
		dictionary::{CFDictionaryRef, CFMutableDictionaryRef},
		string::{CFString, CFStringRef}
	};
	use mach2::kern_return::kern_return_t;

	type io_object_t = mach_port_t;
	type io_registry_entry_t = io_object_t;
	type io_service_t = io_object_t;
	type IOOptionBits = u32;

	#[link(name = "IOKit", kind = "framework")]
	extern "C" {
		static kIOMasterPortDefault: mach_port_t;

		/// Documentation: <https://developer.apple.com/documentation/iokit/1514687-ioservicematching?language=objc>
		fn IOServiceMatching(name: *const c_char) -> CFMutableDictionaryRef;

		/// Documentation: <https://developer.apple.com/documentation/iokit/1514535-ioservicegetmatchingservice?language=objc>
		fn IOServiceGetMatchingService(
			masterPort: mach_port_t,
			matching: CFDictionaryRef
		) -> io_service_t;

		/// Documentation: https://developer.apple.com/documentation/iokit/1514293-ioregistryentrycreatecfproperty?language=objc
		fn IORegistryEntryCreateCFProperty(
			entry: io_registry_entry_t,
			key: CFStringRef,
			allocator: CFAllocatorRef,
			options: IOOptionBits
		) -> CFTypeRef;

		/// Documentation: <https://developer.apple.com/documentation/iokit/1514627-ioobjectrelease?language=objc>
		fn IOObjectRelease(object: io_object_t) -> kern_return_t;
	}

	let expert_device_service = unsafe {
		let service_name = CString::new("IOPlatformExpertDevice").unwrap();
		IOServiceGetMatchingService(
			kIOMasterPortDefault,
			IOServiceMatching(service_name.as_ptr())
		)
	};
	if expert_device_service == 0 {
		return None;
	}

	let release_objects = || unsafe { IOObjectRelease(expert_device_service) };

	let serial_number_cf_string_ref = unsafe {
		IORegistryEntryCreateCFProperty(
			expert_device_service,
			CFString::from_static_string("IOPlatformSerialNumber").as_concrete_TypeRef(),
			kCFAllocatorDefault,
			0
		)
	};
	if serial_number_cf_string_ref == 0 as CFTypeRef {
		release_objects();
		return None;
	}

	// Apple "thinks different", so the format of this serial number is not specified,
	// because they are not happy with just making you pay exorbitant prices. It may
	// be any string. Truncate it if it is big, pad it if it is short, and just use
	// its raw byte values to construct a u128 to return
	let serial_number_string =
		unsafe { CFString::wrap_under_create_rule(serial_number_cf_string_ref as CFStringRef) }
			.to_string();
	let mut serial_number_bytes = serial_number_string.as_bytes();

	let mut buf;
	if serial_number_bytes.len() > 15 {
		serial_number_bytes = &serial_number_bytes[..16];
	} else {
		buf = vec![0; 16];
		buf[..serial_number_bytes.len()].copy_from_slice(serial_number_bytes);
		serial_number_bytes = &buf;
	}

	let result = SystemId::new(
		u128::from_le_bytes(serial_number_bytes.try_into().unwrap()),
		false,
		150
	);

	release_objects();

	result
}

/// Uses the POSIX `gethostid` system call to get a host identifier. Although portable,
/// reliable and usually persistent across boots, the returned ID is only 32-bits, which
/// is weak for our purposes, and the exact way this ID is generated is system-dependent.
/// It usually is generated from a proper machine UUID in some BSDs (best case scenario),
/// from the network configuration (worst case scenario) or read from /etc/hostid.
///
/// Further reading:
/// - <https://pubs.opengroup.org/onlinepubs/9699919799/functions/gethostid.html>
/// - <https://man7.org/linux/man-pages/man3/gethostid.3.html>
/// - <https://www.freebsd.org/cgi/man.cgi?query=gethostid&sektion=3&apropos=0&manpath=freebsd>
/// - <https://docs.oracle.com/cd/E86824_01/html/E54766/gethostid-3c.html>
#[cfg(unix)]
pub(super) fn get_host_id() -> Option<SystemId> {
	use std::os::raw::c_long;

	extern "C" {
		/// `long gethostid()`, from `#include <unistd.h>`.
		///
		/// Documentation: <https://pubs.opengroup.org/onlinepubs/9699919799/functions/gethostid.html>
		fn gethostid() -> c_long;
	}

	#[allow(unsafe_code)]
	SystemId::new(unsafe { gethostid() } as u128, false, 50)
}

/// Gets a machine ID, persistent across upgrades, from its most common location in the
/// Windows registry. This key is not documented in official Microsoft sources, but shows
/// up a lot for this purpose over the Internet and is pretty reliable, even working under
/// Wine.
#[cfg(windows)]
pub(super) fn get_machine_id() -> Option<SystemId> {
	use uuid::Uuid;
	use winreg::{enums::HKEY_LOCAL_MACHINE, RegKey};

	let machine_guid: String = RegKey::predef(HKEY_LOCAL_MACHINE)
		.open_subkey("SOFTWARE\\Microsoft\\Cryptography")
		.ok()?
		.get_value("MachineGuid")
		.ok()?;

	SystemId::new(Uuid::parse_str(&machine_guid).ok()?.as_u128(), false, 200)
}

/// Uses Windows Management Interface to get a product UUID. Although not stated clearly in
/// the documentation, SMBIOS DMI is used to get this UUID. It may be all zeros if a product
/// UUID is not available.
///
/// Further reading:
/// - <https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-computersystemproduct>
#[cfg(windows)]
pub(super) fn get_product_id() -> Option<SystemId> {
	use serde::Deserialize;
	use uuid::Uuid;
	use wmi::{COMLibrary, WMIConnection};

	#[derive(Deserialize)]
	#[serde(rename = "Win32_ComputerSystemProduct")]
	struct ComputerSystemProduct {
		#[serde(rename = "UUID")]
		uuid: String
	}

	let product_info: ComputerSystemProduct =
		WMIConnection::with_namespace_path("ROOT\\CIMV2", COMLibrary::new().ok()?.into())
			.ok()?
			.get()
			.ok()?;

	SystemId::new(
		Uuid::parse_str(&product_info.uuid).ok()?.as_u128(),
		false,
		150
	)
}

/// Returns the Windows install date. This install date may be changed after some updates
/// and, because it is 32-bit long, it is pretty weak. Use as a last-resort fallback.
#[cfg(windows)]
pub(super) fn get_install_date() -> Option<SystemId> {
	use winreg::{enums::HKEY_LOCAL_MACHINE, RegKey};

	let install_date: u32 = RegKey::predef(HKEY_LOCAL_MACHINE)
		.open_subkey("SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion")
		.ok()?
		.get_value("InstallDate")
		.ok()?;

	SystemId::new(
		install_date as u128,
		true, // Murphy's law corollary: Windows will update itself when it's a bad time
		50
	)
}

#[cfg(all(unix, not(target_os = "macos")))]
/// Reads a file that is expected to contain a UUID in text formatto a string.
/// Differently from other helper methods available in the standard library,
/// like `read_to_string`, this limits the maximum number of bytes read,
/// so we discard invalid big files pretty fast and without almost consuming
/// any memory.
fn read_uuid_file<P: AsRef<Path>>(path: P) -> io::Result<String> {
	use std::io::Read;

	/// The maximum size of a UUID, assuming its hyphenated representation.
	const UUID_LENGTH: usize = 36;

	let mut buf = [0; UUID_LENGTH];
	let mut file = fs::File::open(path)?;
	let mut i = 0;

	// Read file bytes until we fill the buffer or reach EOF
	while i < UUID_LENGTH {
		let bytes_read = file.read(&mut buf[i..UUID_LENGTH])?;
		i += bytes_read;

		if bytes_read == 0 {
			break;
		}
	}

	Ok(String::from_utf8_lossy(&buf[..i]).into_owned())
}
