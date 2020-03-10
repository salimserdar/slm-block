<?php

function slm_block_render_latest_posts_block($attributes)
{
    $posts = get_posts(
        [
            'category' => $attributes['selectedCategory'],
            'posts_per_page' => $attributes['postPerPage']
        ]
    );

    ob_start();

    foreach ($posts as $post) {
        echo '<h2>' . $post->post_title . '</h2>';
        echo get_the_post_thumbnail($post->ID);
        echo '<p>' . $post->post_excerpt . '</p>';
        echo '<hr>';
    }

    return ob_get_clean();
}


/**
 * Registers the `posts` block on server.
 */
function slm_block_register_latest_posts_block()
{

    register_block_type(
        'slm-block/latest-post',
        array(
            // Enqueue blocks.style.build.css on both frontend & backend.
            'style'         => 'slm_block-cgb-style-css',
            // Enqueue blocks.build.js in the editor only.
            'editor_script' => 'slm_block-cgb-block-js',
            // Enqueue blocks.editor.build.css in the editor only.
            'editor_style'  => 'slm_block-cgb-block-editor-css',
            'render_callback' => 'slm_block_render_latest_posts_block'
        )
    );
}

add_action('init', 'slm_block_register_latest_posts_block');
