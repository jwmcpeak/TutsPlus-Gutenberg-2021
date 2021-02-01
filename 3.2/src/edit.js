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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

import {Fragment} from '@wordpress/element';

import { 
	TextControl, 
	Card, CardBody, CardDivider,
	CheckboxControl,
	PanelBody, PanelRow,
	SelectControl
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';



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
		<Fragment>
			<div { ...useBlockProps() }>
				<Card>
					<CardBody>
						<TextControl 
							label={ __('Manufacturer', 'guitar-entry')}
							value={attributes.guitarMake}
							onChange={(value) => setAttributes({guitarMake: value}) }
						/>
					</CardBody>
					<CardBody>
						<TextControl 
							label={ __('Name', 'guitar-entry')}
							value={attributes.guitarName}
							onChange={(value) => setAttributes({guitarName: value}) }
						/>
					</CardBody>
					<CardDivider />
					<CardBody>
						<RichText 
							placeholder={'Enter an optional description.'}
							value={attributes.description}
							onChange={(value) => setAttributes({description: value}) }
						/>
					</CardBody>
				</Card>
			</div>
			<InspectorControls>
				<PanelBody title={__('Manufacture Year', 'guitar-entry')}>
					<PanelRow>
						<SelectControl 
							value={attributes.guitarYear}
							onChange={(value) => setAttributes({guitarYear: value})}
							options={[
								{value: 2021, label: '2021'},
								{value: 2020, label: '2020'},
								{value: 2019, label: '2019'},
							]}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('Needs Repair', 'guitar-entry')}>
					<PanelRow>
						<CheckboxControl 
							checked={attributes.needsRepair}
							onChange={(value) => setAttributes({needsRepair: value})}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}
