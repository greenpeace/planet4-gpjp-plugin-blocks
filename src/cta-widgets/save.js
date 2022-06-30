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
import { useBlockProps } from '@wordpress/block-editor'
import { autop } from '@wordpress/autop'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
  return (
    <div
      {...useBlockProps.save({
        className: `p4jp-block-wrapper ${
          attributes.blockType === 'donation'
            ? 'p4jp-block-wrapper--donation'
            : 'p4jp-block-wrapper--about'
        }`,
      })}
    >
      {attributes.blockType === 'donation' && (
        <>
          <div className="fullwidth">
            <div className="fullwidth__left"></div>
            <div className="fullwidth__right"></div>
          </div>
          <div className="content">
            <div className="content__left info">
              <div className="wrapper wrapper--title">
                <h3 className="title">{attributes.title}</h3>
              </div>
              <div
                className="wrapper wrapper--description"
                dangerouslySetInnerHTML={{
                  __html: autop(attributes.description),
                }}
              ></div>
              <div className="wrapper wrapper--keyvisual">
                <img className="keyvisual" src={attributes.image} />
              </div>
            </div>
            <div className="content__right cta">
              <div className="tabs">
                <div className="wrapper wrapper--tabs-label">
                  {attributes.tabLabels.map(
                    ({ value }, index) =>
                      value && (
                        <a
                          className={[
                            'tabs__label',
                            index === 0 ? ' tabs__label--active' : '',
                          ].join('')}
                          data-label-index={index}
                          key={index}
                          href="#"
                        >
                          {value}
                        </a>
                      )
                  )}
                </div>
                <div className="wrapper wrapper--tabs-panel">
                  {attributes.tabPanels.map(
                    ({ content, btnText, btnLink }, index) =>
                      content && (
                        <div
                          className={[
                            'tabs__panel',
                            index === 0 ? ' tabs__panel--active' : '',
                          ].join('')}
                          key={index}
                        >
                          <div className="tabs__content">{content}</div>
                          <a className="tabs__link" href={btnLink}>
                            <button className="tabs__btn">{btnText}</button>
                          </a>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {attributes.blockType === 'about' && (
        <div className="content">
          <div className="content__top">
            <div className="wrapper wrapper--title">
              <h3 className="title">{attributes.title}</h3>
            </div>
            <div className="wrapper wrapper--keyvisual">
              <div className="aspect-box">
                <img className="keyvisual" src={attributes.image} />
              </div>
            </div>
          </div>
          <div className="content__bottom">
            <div
              className="wrapper wrapper--description"
              dangerouslySetInnerHTML={{
                __html: autop(attributes.description),
              }}
            ></div>
            <div className="cta">
              {attributes.ctaBtns.map(
                ({ btnText, btnLink }, index) =>
                  btnText && (
                    <div className="cta-btn" key={index}>
                      <a className="cta-btn__link" href={btnLink}>
                        <button className="cta-btn__btn">{btnText}</button>
                      </a>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
