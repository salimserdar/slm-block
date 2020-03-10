<?php

/**
 * Loads dynamic blocks for server-side rendering.
 *
 * @package CoBlocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Register server-side code for individual blocks.
foreach (glob(dirname(dirname(__FILE__)) . '/src/blocks/*/index.php') as $slm_block_logic) {
    ob_start();
    require_once $slm_block_logic;
    ob_get_clean();
}
