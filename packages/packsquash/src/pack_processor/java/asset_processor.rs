use self::blockstate_asset_processor::BlockStateAssetProcessor;
use crate::config::{self, FileOptionsMap, GlobalOptions};
use crate::pack_processor::java::pack_meta::PackMeta;
use crate::squashed_pack_state::SquashedPackState;
use crate::vfs::VirtualFileSystem;
use enum_map::{enum_map, Enum, EnumMap};
use globset::Glob;
use patricia_tree::PatriciaSet;
use std::io::{Read, Seek};
use strum::Display;

pub(super) mod blockstate_asset_processor;

#[derive(Enum)]
pub(super) enum AssetProcessorType {
	BlockstateAssetProcessor
}

#[derive(Display)]
pub(super) enum AssetProcessorWrapper<
	'state,
	'settings,
	'budget,
	V: VirtualFileSystem + ?Sized,
	F: Read + Seek + Send
> {
	BlockstateAssetProcessor(BlockStateAssetProcessor<'state, 'settings, 'budget, V, F>)
}

pub(super) fn create_asset_processors<
	'state,
	'settings,
	'budget,
	V: VirtualFileSystem + ?Sized,
	F: Read + Seek + Send
>(
	vfs: &'state V,
	pack_meta: &'state PackMeta,
	pack_files: &'state PatriciaSet,
	global_options: &'state GlobalOptions,
	file_options: &'state FileOptionsMap,
	squashed_pack_state: &'state SquashedPackState<'settings, 'budget, F>
) -> EnumMap<AssetProcessorType, AssetProcessorWrapper<'state, 'settings, 'budget, V, F>> {
	enum_map! {
		AssetProcessorType::BlockstateAssetProcessor => AssetProcessorWrapper::BlockstateAssetProcessor(
			BlockStateAssetProcessor::new(vfs, pack_meta, pack_files, global_options, file_options, squashed_pack_state)
		)
	}
}

macro_rules! get_asset_processor {
	($asset_processors:expr , $ty:ident) => {
		// This pattern is irrefutable by construction, but there are not better ways to unwrap the variant
		#[allow(irrefutable_let_patterns)]
		if let $crate::pack_processor::java::asset_processor::AssetProcessorWrapper::$ty(
			ref asset_processor
		) = $asset_processors[$crate::pack_processor::java::asset_processor::AssetProcessorType::$ty]
		{
			asset_processor
		} else {
			unreachable!()
		}
	};
}

/// Compiles the specified pack file glob pattern, assuming it was hardcoded in the application binary.
/// Any validity error is discarded and turned into a panic, as modification of hardcoded data is not
/// to be handled as an error.
///
/// Please note that, even though this function requires a static string slice in an effort to prevent
/// accidental misuse, it is possible to get string slices that live indefinitely by leaking a heap
/// allocation.
fn compile_hardcoded_pack_file_glob_pattern(glob_pattern: &'static str) -> Glob {
	config::compile_pack_file_glob_pattern(glob_pattern).unwrap()
}
