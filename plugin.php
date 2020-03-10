<?php

/**
 * Plugin Name: Salim's Blocks
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: slm-block — is a Gutenberg plugin created via create-guten-block.
 * Author: Salim Serdar Koksal
 * Author URI: #
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package slm
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . 'src/init.php';


/**
 * Server Side Render Function Initializer
 */
require_once plugin_dir_path(__FILE__) . 'include/get-dynamic-blocks.php';


