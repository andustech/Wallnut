import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import parse from 'react-html-parser';

import { getYotpoReviewsData, isSaleOn, fetchProductByHandle } from '../../utils';
import MobileProductDetailsSection from './MobileProductDetailsSection';
import DesktopProductDetails from './DesktopProductDetails';
import ProductRecommended from '../ProductRecommended';
import YotpoReviews from '../YotpoReviews';
import ProductSelector from './ProductSelector';
import VideoPlayer from '../VideoPlayer';
import PDPValueProps from './PDPValueProps';
import { SectionTiltle } from '../ProductFeature/ValuePropComponent';

const getProductTypeBlocks = (product, blocks) => {
  if (!product) {
    return [];
  }

  console.log('getProductTypeBlocks == ', blocks)
  return blocks.filter(
    (block) => block.type === 'product_details'
  );
};

const ProductSectionA = (props) => {
  const { settings, blocks, product, assetURL, themeSettings, metafields } = props;

  console.log('blocks == ', blocks)

  const { sale_start, sale_end } = themeSettings;
  const salesOn = isSaleOn(sale_start, sale_end);

  const [reviews, setReviews] = useState({});
  const [currentProduct, setCurrentProduct] = useState({
    ...product,
    handle: metafields.productHandleName,
    metafields,
  });
  const [currentVariant, setCurrentVariant] = useState();

  const reviewsRef = useRef();
  const descriptionRef = useRef();
  const productTypeBlocks = getProductTypeBlocks(currentProduct, blocks);

  console.log('blocks == ', productTypeBlocks)

  useEffect(() => {
    let defaultVariant = product.variants.find((variant) =>
      variant.options.includes('Matte Black')
    );

    if (product.handle === 'e-gift-card') {
      const [firstVariant] = product.variants;
      defaultVariant = firstVariant;
    }

    const params = new URLSearchParams(window.location.search);
    const variantID = parseInt(params.get('variant'), 10);
    const color = params.get('color');

    if (color) {
      const variantFromColorParams = currentProduct.variants.find((variant) =>
        variant.options.includes(color)
      );
      setCurrentVariant(variantFromColorParams || defaultVariant);
    } else {
      const variantFromParams = currentProduct.variants.find((variant) => variant.id === variantID);
      setCurrentVariant(variantFromParams || defaultVariant);
    }
  }, [currentProduct.variants, product, product.handle]);

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle, no-use-before-define
    const _learnq = _learnq || [];

    (async () => {
      const yotpoReviews = await getYotpoReviewsData(currentProduct.id);

      setReviews(yotpoReviews);
    })();
  }, [product.id, product.handle, currentProduct.id]);

  const handleSelectingOption = (productHandle) => {
    fetchProductByHandle(productHandle, metafields).then((res) => {
      const params = new URLSearchParams(window.location.search);
      const defaultColor = 'Matte Black';
      const color = params.get('color');
      const variantItem = res.variants.find((variant) =>
        variant.options.includes(color || defaultColor)
      );

      window.history.pushState(
        {},
        '',
        `${productHandle}?variant=${variantItem.id}&color=${color || defaultColor}`
      );

      setCurrentProduct(res);
      setCurrentVariant(variantItem);
    });
  };

  return (
    <section>
      <div className="px-4">
        {product.handle !== 'e-gift-card' && (
          <StyledDiv
            handle={product.handle}
            template={productTypeBlocks[0]?.settings.exclusive_template}
            salesOn={salesOn}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 text-center top-1/2 transform w-11/12">
              <h1 className="block font-serif mb-0 md:inline md:text-3xl mt-4 text-2xl whitespace-nowrap">
                {productTypeBlocks[0]?.settings.direct_response_text}{' '}
              </h1>
              <DRBannerDiscount>
                {productTypeBlocks[0]?.settings.direct_response_discount}% OFF
              </DRBannerDiscount>
            </div>
          </StyledDiv>
        )}
        {currentVariant && (
          <div className="grid grid-cols-1 justify-items-auto xl:justify-items-center mb-20 mt-10">
            <ProductSelector
              product={currentProduct}
              currentVariant={currentVariant}
              handleSelectingOption={handleSelectingOption}
              setReviews={setReviews}
              reviews={reviews}
              reviewsRef={reviewsRef}
              descriptionRef={descriptionRef}
              assetURL={assetURL}
              discount={
                product.handle !== 'e-gift-card'
                  ? productTypeBlocks[0]?.settings.direct_response_discount
                  : '0'
              }
              productMessaging={{
                shippingMessage: settings.shipping_message,
                shippingTime: settings.shipping_time,
                shippingMessageInfo: settings.shipping_message_info,
                shippingMessageInfoHeight: settings.shipping_message_info_height,
              }}
              overlayImage={productTypeBlocks[0]?.settings.product_overlay_image}
              overlayImageMobile={productTypeBlocks[0]?.settings.product_overlay_image_mobile}
            />
          </div>
        )}
      </div>
      <ProductDescription ref={descriptionRef}>
        <SectionTiltle className='section_titile pdp-small mb-0'>
          <h2 className="font-bold text-center">About {product.title}</h2>
        </SectionTiltle>
        {parse(product.description)}
      </ProductDescription>
      <DesktopProductDetails productTypeBlocks={productTypeBlocks} blocks={blocks} />
      <div className="mb-8 md:hidden px-4">
        {productTypeBlocks.map((block, i) => {
          const {
            howitwork_tab_heading,
            about_paragraph,
            about_paragraphNote,
            about_desktop_heading,
            about_image,
            about_video_url,
            about_media_type,
          } = block.settings;
          return (
            <div key={i}>
              <div className="pb-5 border-grey-50 border-b border-solid">
                <h5 className="font-serif text-orange-burnt text-base font-normal mb-1 text-lg">
                  {howitwork_tab_heading}
                </h5>
                <StyledMobileMedia mediaType={about_media_type}>
                  {about_image && about_media_type === 'image' && <img src={about_image} alt="" />}
                  {about_video_url && about_media_type === 'video' && (
                    <VideoPlayer link={about_video_url} autoPlay loop />
                  )}
                </StyledMobileMedia>
                <div className="font-serif mb-3 mt-2">{about_desktop_heading}</div>
                <p className="text-sm font-extralight mb-3">{about_paragraph}</p>
                {about_paragraphNote && (
                  <p className="text-sm font-normal mb-3 text-brown">{about_paragraphNote}</p>
                )}
              </div>
              <PDPValueProps width={80} height={80} />
              <MobileProductDetailsSection productTypeBlock={block} blocks={blocks} />
            </div>
          );
        })}
      </div>
      <ProductRecommended product={currentProduct} title="Here’s other products you might like." />
      <div ref={reviewsRef}>
        {reviews.reviews && <YotpoReviews reviews={reviews} product={currentProduct} />}
      </div>
    </section>
  );
};

const DRBannerDiscount = styled.h1.attrs({
  className: 'block font-serif font-normal md:inline md:text-3xl text-2xl text-orange-burnt',
})`
  text-shadow: 2px 2px #f2caaf;
`;

const ProductDescription = styled.div.attrs({
  className: 'product-description ml-auto mr-auto text-center',
})`
  max-width: 644px;
  margin-bottom: 112px;
`;

const StyledMobileMedia = styled.div.attrs(({ mediaType }) => {
  const className = mediaType === 'video' ? 'mb-5' : '';

  return {
    className,
  };
})``;

const StyledDiv = styled.div.attrs(({ handle, template, salesOn }) => {
  let className = 'relative my-2 mx-auto w-full h-20 md:my-6 lg:max-w-7xl bg-blue-baby';

  if (handle.includes('exclusive') || (template && salesOn)) {
    className = `${className} block`;
  } else {
    className = `${className} hidden`;
  }
  return {
    className,
  };
})``;

ProductSectionA.defaultProps = {
  product: {
    variants: [],
    compare_at_price: null,
  },
  handle: '',
};

ProductSectionA.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        option1: PropTypes.string,
        option2: PropTypes.string,
        option3: PropTypes.string,
      })
    ),
    handle: PropTypes.string,
    title: PropTypes.string,
    compare_at_price: PropTypes.number,
  }),
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentVariant: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
  }).isRequired,
  themeSettings: PropTypes.shape({
    sale_start: PropTypes.string,
    sale_end: PropTypes.string,
  }).isRequired,
  handle: PropTypes.string,
  assetURL: PropTypes.string.isRequired,
  metafields: PropTypes.shape({
    productHandleName: PropTypes.string,
    yotpoProductId: PropTypes.string,
  }).isRequired,
};

export default ProductSectionA;
