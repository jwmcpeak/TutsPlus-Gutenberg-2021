/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import {TextControl} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (

		<div { ...useBlockProps() }>
			<div>
				<TextControl 
					label={ __('Manufacturer', 'guitar-entry')}
					value={attributes.guitarMake}
					onChange={(value) => setAttributes({guitarMake: value}) }
				/>
			</div>
			<div>
				<TextControl 
					label={ __('Name', 'guitar-entry')}
					value={attributes.guitarName}
					onChange={(value) => setAttributes({guitarName: value}) }
				/>
			</div>
			<div>
				<RichText 
					placeHolder="Enter an optional description."
					value={attributes.description}
					onChange={(value) => setAttributes({description: value}) }
				/>
			</div>
		</div>
		// <p { ...useBlockProps() }>
		// 	{ __( 'Guitar Entry – hello from the editor!', 'guitar-entry' ) }
		// </p>
	);
}
