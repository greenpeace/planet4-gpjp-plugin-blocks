<?php
/**
 * Plugin Name:       Planet4 - GPJP Plugin Blocks
 * Description:       Contains blocks that are specific to Greenpeace Japan Planet4
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       planet4-gpjp-plugin-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function planet4_gpjp_plugin_blocks() {
	register_block_type( __DIR__ . '/build/cta-widgets' );
	/* register_block_type( __DIR__ . '/build/{{another-plugin}}' ); */
}

add_action( 'init', 'planet4_gpjp_plugin_blocks' );

function p4_child_theme_gpjp_whitelist_blocks( $allowed_blocks, $post ) {
	$allowed = is_array($allowed_blocks) ? $allowed_blocks : array();
	array_push($allowed, 'planet4-japan/cta-widgets');
	return $allowed;
}

add_filter('allowed_block_types_all', 'p4_child_theme_gpjp_whitelist_blocks', 11, 2);
