import React from 'react'
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  Button,
  TextControl,
  RadioControl,
  ColorPicker,
} from '@wordpress/components'
import {
  useBlockProps,
  PlainText,
  MediaUpload,
  MediaUploadCheck,
  URLInput,
} from '@wordpress/block-editor'
import { useInstanceId } from '@wordpress/compose'
import { useEffect } from '@wordpress/element'
import { addFilter } from '@wordpress/hooks'
import { removep } from '@wordpress/autop'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

const WithId = (WrappedComponent) => (props) => {
  const instanceId = useInstanceId(WrappedComponent)

  return <WrappedComponent {...props} instanceId={instanceId} />
}

export default WithId(function Edit({ instanceId, attributes, setAttributes }) {

  const blockProps = useBlockProps()

  const handleOnChange = (attributeKey) => (value) => {
    setAttributes({ [attributeKey]: value })
  }

  const handleArrayItemChange = (attributeKey, index, fieldName) => (value) => {
    // make a copy
    const newValue = [...attributes[attributeKey]]

    // make the change
    newValue[index][fieldName] = value

    setAttributes({ [attributeKey]: newValue })
  }

  useEffect(()=>{
    setAttributes({blockId: instanceId})
  },[])

  return (
    <div {...blockProps} className="p4-jp-block-wrapper">
      <div>
        <strong>Block Type</strong>
      </div>
      <div>
        <RadioControl
          selected={attributes.blockType}
          options={[
            { label: 'Donation', value: 'donation' },
            { label: 'About GP', value: 'about' },
          ]}
          onChange={handleOnChange('blockType')}
        />
      </div>
      <div>
        <strong>Title</strong>
      </div>
      <div>
        <TextControl
          onChange={handleOnChange('title')}
          value={attributes.title}
          placeholder="Enter Title..."
        />
      </div>
      <div>
        <strong>Description</strong>
      </div>
      <div>
        <PlainText
          onChange={handleOnChange('description')}
          value={attributes.description}
        />
      </div>
      <div>
        <strong>Image</strong>
      </div>
      <div className="image-settings">
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => {
              handleOnChange('image')(media.url)
              handleOnChange('imageId')(media.id)
            }}
            allowedTypes={['image']}
            value={attributes.imageId}
            render={({ open }) => <Button onClick={open}>Select Image</Button>}
          />
        </MediaUploadCheck>
        <div>
          <img src={attributes.image} />
        </div>
      </div>
      {attributes.blockType === 'donation' && (
        <>
          <div>
            <strong>Image Overlay Color</strong>
          </div>
          <div>
            <ColorPicker
              color={attributes.imageOverlayColor}
              onChange={handleOnChange('imageOverlayColor')}
              enableAlpha
              defaultValue="rgba(0,0,0,0.5)"
            />
          </div>
          {attributes.tabLabels.map((tabLabel, index) => (
            <React.Fragment key={index}>
              <div>
                <strong>Tab {index + 1}</strong>
              </div>
              <div className="tab-settings">
                <div>Label</div>
                <div>
                  <TextControl
                    onChange={handleArrayItemChange(
                      'tabLabels',
                      index,
                      'value'
                    )}
                    value={tabLabel.value}
                  />
                </div>
                <div>Content</div>
                <div>
                  <PlainText
                    onChange={handleArrayItemChange(
                      'tabPanels',
                      index,
                      'content'
                    )}
                    value={attributes.tabPanels[index].content}
                  />
                </div>
                <div>Button Text</div>
                <div>
                  <TextControl
                    onChange={handleArrayItemChange(
                      'tabPanels',
                      index,
                      'btnText'
                    )}
                    value={attributes.tabPanels[index].btnText}
                  />
                </div>
                <div>Button Link</div>
                <div>
                  <div>
                    <URLInput
                      onChange={handleArrayItemChange(
                        'tabPanels',
                        index,
                        'btnLink'
                      )}
                      value={attributes.tabPanels[index].btnLink}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </>
      )}
      {attributes.blockType === 'about' &&
        attributes.ctaBtns.map((ctaBtn, index) => (
          <React.Fragment key={index}>
            <div>
              <strong>Button {index + 1}</strong>
            </div>
            <div className="btn-settings">
              <div>Button Text</div>
              <div>
                <TextControl
                  onChange={handleArrayItemChange('ctaBtns', index, 'btnText')}
                  value={ctaBtn.btnText}
                />
              </div>
              <div>Button Link</div>
              <div>
                <div>
                  <URLInput
                    onChange={handleArrayItemChange(
                      'ctaBtns',
                      index,
                      'btnLink'
                    )}
                    value={ctaBtn.btnLink}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
    </div>
  )
})

function sanitizeBlockAttributes(blockAttr, blockConfig) {
  if (blockConfig.name === 'planet4-japan/cta-widgets') {
    if (blockAttr.description) {
      blockAttr.description = removep(blockAttr.description)
    }
  }
  return blockAttr
}

addFilter(
  'blocks.getBlockAttributes',
  'planet4-japan/cta-widgets',
  sanitizeBlockAttributes
)
