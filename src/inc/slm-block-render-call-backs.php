<?php 

function render_posts_block($attributes)
{
	$posts = get_posts(
		[
			'category' => $attributes['selectedCategory'],
			'posts_per_page' => $attributes['postPerPage']
		]
	);

	ob_start();

	foreach ($posts as $post) {
		echo '<h2>'.$post->post_title.'</h2>';
		echo get_the_post_thumbnail($post->ID);
		echo '<p>'.$post->post_excerpt.'</p>';
		echo '<hr>';
	}

	return ob_get_clean();
}