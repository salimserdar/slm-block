/**
 * BLOCK: slm-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('slm-block/latest-post', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Latest Post'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('slm-block — Latest Post'),
		__('Lates Post'),
		__('create-guten-block'),
	],

	attributes: {
		categories: {
			type: 'object'
		},
		selectedCategory: {
			type: 'string'
		},
		postPerPage: {
			type: 'string'
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {

		if (!props.attributes.categories) {
			wp.apiFetch({
				url: '/wp-json/wp/v2/categories'
			}).then(categories => {
				props.setAttributes({
					categories: categories
				})
			});
		}

		if (!props.attributes.categories) {
			return 'Loading...';
		}

		if (props.attributes.categories && props.attributes.categories.length === 0) {
			return 'No categories found... Please add some!';
		}

		const updateCategory = (e) => {
			props.setAttributes({
				selectedCategory: e.target.value,
			})
		}

		const updatePostPerPage = (e) => {
			props.setAttributes({
				postPerPage: e.target.value,
			})
		}

		return (
			<div>
				<select onChange={updateCategory} value={props.attributes.selectedCategory}>
					{
						props.attributes.categories.map(category => {
							return (
								<option value={category.id} key={category.id}>
									{category.name}
								</option>
							);
						})
					}
				</select>
				<input type="text" onBlur={ updatePostPerPage } value={props.attributes.postPerPage} />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return null;
	},
});
