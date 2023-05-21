use std::io::Cursor;

use pretty_assertions::assert_eq;

use super::*;

/// The test file name, with strange, but perfectly valid and fine,
/// Unicode characters that tend to break programs (hopefully not
/// PackSquash, though!).
const FILE_NAME: &str = "𒀭𒂗𒆠 こんにちは 😄.bin";

/// The size of the local file header that should be generated.
const LOCAL_FILE_HEADER_SIZE: usize = 30 + FILE_NAME.len();

// The minimum central directory header size, assuming an empty file
// name, no extra fields and no file comments.
const MINIMUM_CENTRAL_DIRECTORY_HEADER_SIZE: usize = 46;

/// The size of the central directory header, assuming no extra fields
/// and no file comments, but a file name of length `FILE_NAME.len()`.
const CENTRAL_DIRECTORY_HEADER_SIZE_NO_EXTRA_FIELDS: usize =
	MINIMUM_CENTRAL_DIRECTORY_HEADER_SIZE + FILE_NAME.len();

/// The size of the ZIP64 end of central directory record, assuming no
/// extensible data sector.
const ZIP64_END_OF_CENTRAL_DIRECTORY_SIZE: usize = 56;

/// The size of the ZIP64 end of central directory record locator.
const ZIP64_END_OF_CENTRAL_DIRECTORY_LOCATOR_SIZE: usize = 20;

/// The size of the end of central directory record, assuming no
/// comments.
const END_OF_CENTRAL_DIRECTORY_SIZE: usize = 22;

/// Tests that central directory headers are written as expected, no matter if ZIP64
/// extensions are used or not.
fn central_directory_works_test(use_zip64_extensions: bool) {
	let local_file_header_offset = if use_zip64_extensions {
		(u32::MAX as u64) + 1 // This can only be represented using ZIP64 extensions
	} else {
		0
	};

	let extra_field_size = if use_zip64_extensions { 12 } else { 0 };

	let cen = CentralDirectoryHeader {
		compression_method: CompressionMethod::Deflate,
		squash_time: 42u32.to_le_bytes(),
		crc32: 1,
		compressed_size: 2,
		uncompressed_size: 3,
		local_header_disk_number: 4,
		local_header_offset: local_file_header_offset,
		file_name: RelativePath::from_inner(FILE_NAME),
		spoof_version_made_by: false
	};

	assert_eq!(
		cen.requires_zip64_extensions(),
		use_zip64_extensions,
		"The reported ZIP64 extensions requirement status for the central directory header was unexpected"
	);

	assert_eq!(
		cen.compute_extra_field_length(),
		extra_field_size,
		"Unexpected extra field length for the specified ZIP64 extension usage"
	);

	let cen_size = CENTRAL_DIRECTORY_HEADER_SIZE_NO_EXTRA_FIELDS + extra_field_size as usize;

	let mut buf =
		Vec::with_capacity(CENTRAL_DIRECTORY_HEADER_SIZE_NO_EXTRA_FIELDS + extra_field_size as usize);

	// Write central directory header and compare expected bytes with actual
	// generated bytes
	{
		cen.write(&mut buf)
			.expect("No error should happen while writing the central directory header");

		assert_eq!(
			buf.len(),
			cen_size,
			"Unexpected number of bytes written for the central directory header"
		);

		assert_eq!(
			buf[..4],
			[0x50, 0x4B, 0x01, 0x02],
			"Unexpected central directory header signature"
		);

		assert_eq!(
			buf[4..6],
			ZipFeature::Zip64Extensions
				.to_version_needed_to_extract()
				.to_le_bytes(),
			"Unexpected version made by in central directory header"
		);

		assert_eq!(
			buf[6..8],
			if use_zip64_extensions {
				ZipFeature::Zip64Extensions
			} else {
				ZipFeature::DeflateCompression
			}
			.to_version_needed_to_extract()
			.to_le_bytes(),
			"Unexpected version needed to extract in central directory header"
		);

		// Test that EFS bit is set appropriately for UTF-8 file names
		assert_eq!(
			buf[8..10],
			[0, 8], // 0b1000_0000_0000
			"Unexpected general purpose bit flag in central directory header"
		);

		assert_eq!(
			buf[10..12],
			CompressionMethod::Deflate
				.to_compression_method_field()
				.to_le_bytes(),
			"Unexpected compression method in central directory header"
		);

		assert_eq!(
			buf[12..14],
			[42, 0],
			"Unexpected last modification time in central directory header"
		);

		assert_eq!(
			buf[14..16],
			[0; 2],
			"Unexpected last modification date in central directory header"
		);

		assert_eq!(
			buf[16..20],
			[1, 0, 0, 0],
			"Unexpected CRC32 in central directory header"
		);

		assert_eq!(
			buf[20..24],
			[2, 0, 0, 0],
			"Unexpected compressed size in central directory header"
		);

		assert_eq!(
			buf[24..28],
			[3, 0, 0, 0],
			"Unexpected uncompressed size in central directory header"
		);

		assert_eq!(
			buf[28..30],
			(FILE_NAME.len() as u16).to_le_bytes(),
			"Unexpected file name length in central directory header"
		);

		assert_eq!(
			buf[30..32],
			extra_field_size.to_le_bytes(),
			"Unexpected extra field length in central directory header"
		);

		assert_eq!(
			buf[32..34],
			[0; 2],
			"Unexpected file comment length in central directory header"
		);

		assert_eq!(
			buf[34..36],
			[4, 0],
			"Unexpected disk start number in central directory header"
		);

		assert_eq!(
			buf[36..38],
			[0; 2],
			"Unexpected internal file attributes in central directory header"
		);

		assert_eq!(
			buf[38..42],
			FILE_ATTRIBUTE_READONLY.to_le_bytes(),
			"Unexpected external file attributes in central directory header"
		);

		assert_eq!(
			buf[42..46],
			if local_file_header_offset <= u32::MAX as u64 {
				(local_file_header_offset as u32).to_le_bytes()
			} else {
				[0xFF; 4]
			},
			"Unexpected relative offset of local file header in central directory header"
		);

		const FILE_NAME_END_OFFSET: usize = 46 + FILE_NAME.len();
		assert_eq!(
			&buf[46..FILE_NAME_END_OFFSET],
			FILE_NAME.as_bytes(),
			"Unexpected file name in central directory header"
		);

		if use_zip64_extensions {
			assert_eq!(
				buf[FILE_NAME_END_OFFSET..FILE_NAME_END_OFFSET + 2],
				[1, 0],
				"Unexpected ZIP64 extra field header in central directory header"
			);

			assert_eq!(
				buf[FILE_NAME_END_OFFSET + 2..FILE_NAME_END_OFFSET + 4],
				[8, 0],
				"Unexpected ZIP64 extra field size in central directory header"
			);

			assert_eq!(
				buf[FILE_NAME_END_OFFSET + 4..FILE_NAME_END_OFFSET + 12],
				local_file_header_offset.to_le_bytes(),
				"Unexpected local file header offset in central directory header"
			);
		}
	}
}

/// Tests that the end of central directory is written as expected, no matter if ZIP64
/// extensions are used or not.
fn end_of_central_directory_works_test(use_zip64_extensions: bool) {
	let central_directory_start_offset = if use_zip64_extensions {
		(u32::MAX as u64) + 1 // This can only be represented using ZIP64 extensions
	} else {
		5
	};

	let eocd_size = END_OF_CENTRAL_DIRECTORY_SIZE
		+ (ZIP64_END_OF_CENTRAL_DIRECTORY_SIZE + ZIP64_END_OF_CENTRAL_DIRECTORY_LOCATOR_SIZE)
			* use_zip64_extensions as usize;

	let eocd = EndOfCentralDirectory {
		disk_number: 0,
		central_directory_start_disk_number: 1,
		central_directory_entry_count_current_disk: 2,
		total_central_directory_entry_count: 3,
		central_directory_size: 4,
		central_directory_start_offset,
		total_number_of_disks: 6,
		current_file_offset: 7,
		zip64_record_size_offset: 8,
		spoof_version_made_by: true,
		zero_out_unused_zip64_fields: false
	};

	assert_eq!(
		eocd.requires_zip64_extensions(),
		use_zip64_extensions,
		"The reported ZIP64 extensions requirement status for the end of central directory was unexpected"
	);

	let mut buf = Vec::with_capacity(eocd_size);

	// Write end of central directory and compare expected bytes with actual
	// generated bytes
	{
		eocd.write(&mut buf)
			.expect("No error should happen while writing the end of central directory");

		assert_eq!(
			buf.len(),
			eocd_size,
			"Unexpected number of bytes written for the end of central directory"
		);

		let eocd_header_offset;
		if use_zip64_extensions {
			eocd_header_offset =
				ZIP64_END_OF_CENTRAL_DIRECTORY_SIZE + ZIP64_END_OF_CENTRAL_DIRECTORY_LOCATOR_SIZE;

			// Check ZIP64 end of central directory fields
			assert_eq!(
				buf[..4],
				[0x50, 0x4B, 0x06, 0x06],
				"Unexpected ZIP64 end of central directory signature"
			);

			assert_eq!(
				buf[4..12],
				// - 12 comes from the formula in the specification, at section 4.3.14.
				// We also sum the offset
				((ZIP64_END_OF_CENTRAL_DIRECTORY_SIZE + 8 - 12) as u64).to_le_bytes(),
				"Unexpected size of ZIP64 end of central directory"
			);

			assert_eq!(
				buf[12..14],
				[30, 3],
				"Unexpected version made by in ZIP64 end of central directory"
			);

			assert_eq!(
				buf[14..16],
				ZipFeature::Zip64Extensions
					.to_version_needed_to_extract()
					.to_le_bytes(),
				"Unexpected version needed to extract in ZIP64 end of central directory"
			);

			assert_eq!(
				buf[16..20],
				[0; 4],
				"Unexpected disk number in ZIP64 end of central directory"
			);

			assert_eq!(
				buf[20..24],
				[1, 0, 0, 0],
				"Unexpected central directory start disk number in ZIP64 end of central directory"
			);

			assert_eq!(
				buf[24..32],
				[2, 0, 0, 0, 0, 0, 0, 0],
				"Unexpected number of central directory entries in this disk in ZIP64 end of central directory"
			);

			assert_eq!(
				buf[32..40],
				[3, 0, 0, 0, 0, 0, 0, 0],
				"Unexpected number of total central directory entries in ZIP64 end of central directory"
			);

			assert_eq!(
				buf[40..48],
				[4, 0, 0, 0, 0, 0, 0, 0],
				"Unexpected size of central directory in ZIP64 end of central directory"
			);

			assert_eq!(
				buf[48..56],
				central_directory_start_offset.to_le_bytes(),
				"Unexpected offset of start of central directory in ZIP64 end of central directory"
			);

			// Check ZIP64 end of central directory locator
			assert_eq!(
				buf[56..60],
				[0x50, 0x4B, 0x06, 0x07],
				"Unexpected ZIP64 end of central directory locator signature"
			);

			assert_eq!(
				buf[60..64],
				[1, 0, 0, 0],
				"Unexpected ZIP64 central directory disk start number in ZIP64 end of central directory locator"
			);

			assert_eq!(
				buf[64..72],
				[7, 0, 0, 0, 0, 0, 0, 0],
				"Unexpected ZIP64 end of central directory offset in ZIP64 end of central directory locator"
			);

			assert_eq!(
				buf[72..76],
				[6, 0, 0, 0],
				"Unexpected number of disks in ZIP64 end of central directory locator"
			);
		} else {
			eocd_header_offset = 0;
		}

		assert_eq!(
			buf[eocd_header_offset..eocd_header_offset + 4],
			[0x50, 0x4B, 0x05, 0x06],
			"Unexpected end of central directory header signature"
		);

		assert_eq!(
			buf[eocd_header_offset + 4..eocd_header_offset + 6],
			[0; 2],
			"Unexpected disk number in end of central directory header"
		);

		assert_eq!(
			buf[eocd_header_offset + 6..eocd_header_offset + 8],
			[1, 0],
			"Unexpected central directory start disk number in end of central directory header"
		);

		assert_eq!(
			buf[eocd_header_offset + 8..eocd_header_offset + 10],
			[2, 0],
			"Unexpected number of central directory entries in this disk in end of central directory header"
		);

		assert_eq!(
			buf[eocd_header_offset + 10..eocd_header_offset + 12],
			[3, 0],
			"Unexpected number of total central directory entries in end of central directory header"
		);

		assert_eq!(
			buf[eocd_header_offset + 12..eocd_header_offset + 16],
			[4, 0, 0, 0],
			"Unexpected size of central directory in end of central directory header"
		);

		assert_eq!(
			buf[eocd_header_offset + 16..eocd_header_offset + 20],
			if use_zip64_extensions {
				u32::MAX
			} else {
				central_directory_start_offset as u32
			}
			.to_le_bytes(),
			"Unexpected offset of start of central directory in end of central directory header"
		);

		assert_eq!(
			buf[eocd_header_offset + 20..eocd_header_offset + 22],
			[0, 0],
			"Unexpected comment length in end of central directory header"
		);
	}
}

#[test]
fn local_file_header_works() {
	let buf = Vec::with_capacity(LOCAL_FILE_HEADER_SIZE);

	let mut loc = LocalFileHeader::new(Cow::Owned(RelativePath::from_inner(FILE_NAME)));

	// Test changing fields after instantiation
	loc.compression_method = CompressionMethod::Deflate;
	loc.squash_time = [0xDD, 0xCC, 0xBB, 0xAA];
	loc.compressed_size = 1;
	loc.uncompressed_size = 2;
	loc.crc32 = 3;

	// Write local file header and compare expected bytes with actual generated bytes
	{
		let mut cursor = Cursor::new(buf);

		loc.write(&mut cursor)
			.expect("No error should happen while writing the local file header");

		assert_eq!(
			cursor.position(),
			LOCAL_FILE_HEADER_SIZE as u64,
			"Unexpected amount of bytes written for the local file header"
		);

		let buf = cursor.into_inner();

		assert_eq!(
			buf[..4],
			[0x50, 0x4B, 0x03, 0x04],
			"Unexpected local file header signature"
		);

		assert_eq!(
			buf[4..6],
			[20, 0],
			"Unexpected version needed to extract in local file header"
		);

		// Test that EFS bit is set appropriately for UTF-8 file names
		assert_eq!(
			buf[6..8],
			[0, 8], // 0b1000_0000_0000
			"Unexpected general purpose bit flag in local file header"
		);

		assert_eq!(
			buf[8..10],
			CompressionMethod::Deflate
				.to_compression_method_field()
				.to_le_bytes(),
			"Unexpected compression method in local file header"
		);

		assert_eq!(
			buf[10..12],
			[0xDD, 0xCC],
			"Unexpected last modification time in local file header"
		);

		assert_eq!(
			buf[12..14],
			[0xBB, 0xAA],
			"Unexpected last modification date in local file header"
		);

		assert_eq!(
			buf[14..18],
			[3, 0, 0, 0],
			"Unexpected CRC32 in local file header"
		);

		assert_eq!(
			buf[26..28],
			(FILE_NAME.len() as u16).to_le_bytes(),
			"Unexpected file name length in local file header"
		);

		assert_eq!(
			&buf[30..],
			FILE_NAME.as_bytes(),
			"Unexpected file name in local file header"
		);
	}
}

#[test]
fn central_directory_zip32_header_works() {
	central_directory_works_test(false)
}

#[test]
fn central_directory_zip64_header_works() {
	central_directory_works_test(true)
}

#[test]
fn end_of_central_directory_zip32_works() {
	end_of_central_directory_works_test(false)
}

#[test]
fn end_of_central_directory_zip64_works() {
	end_of_central_directory_works_test(true)
}
