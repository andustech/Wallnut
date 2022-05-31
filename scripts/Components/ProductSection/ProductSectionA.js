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
import { SectionTiltle } from '../ProductFeature/ValuePropComponent';

const getProductTypeBlocks = (product, blocks) => {
  if (!product) {
    return [];
  }
  return blocks.filter((block) => block.type === 'product_details');
};

const ProductSectionA = (props) => {
  const { settings, blocks, product, assetURL, themeSettings, metafields } = props;
  const [frameSelected, setFrameSelected] = useState('');
  const [frameColorSelected, setFrameColorSelected] = useState('');
  const { sale_start, sale_end } = themeSettings;
  const salesOn = isSaleOn(sale_start, sale_end);

  const [reviews, setReviews] = useState({});
  const [currentProduct, setCurrentProduct] = useState({
    ...product,
    metafields,
  });
  const [currentVariant, setCurrentVariant] = useState();

  const reviewsRef = useRef();
  const descriptionRef = useRef();
  const productTypeBlocks = getProductTypeBlocks(currentProduct, blocks);

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
      <div className="container">
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
          <div className="grid grid-cols-1 justify-items-auto xl:justify-items-center mb-14 lg:mb-20 mt-8 lg:mt-10">
            <ProductSelector
              setFrameSelected={setFrameSelected}
              setFrameColorSelected={setFrameColorSelected}
              product={currentProduct}
              currentVariant={currentVariant}
              handleSelectingOption={handleSelectingOption}
              setReviews={setReviews}
              enableReviews={settings.enable_product_reviews}
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
            />
          </div>
        )}
      </div>
      <ProductDescription ref={descriptionRef}>
        <SectionTiltle className="section_titile pdp-small mb-0">
          <h2 className="font-bold text-left md:text-center text-black">About {product.title}</h2>
        </SectionTiltle>
        {parse(product.description)}
      </ProductDescription>
      <DesktopProductDetails
        productTypeBlocks={productTypeBlocks}
        blocks={blocks}
        frameSelected={frameSelected}
        frameColorSelected={frameColorSelected}
      />
      <div className="md:hidden mobile-pdp-tabs container">
        {productTypeBlocks.map((block, i) => {
          return (
            <div key={i}>
              <MobileProductDetailsSection 
                productTypeBlock={block}
                blocks={blocks}
                frameSelected={frameSelected}
                frameColorSelected={frameColorSelected}
              />
            </div>
          );
        })}
      </div>
      <ProductRecommended product={currentProduct} title="Here’s other products you might like." />
      {settings.enable_product_reviews && (
        <>
          <div ref={reviewsRef}>
            {reviews.reviews && <YotpoReviews reviews={reviews} product={currentProduct} />}
          </div>
        </>
      )}
    </section>
  );
};

const DRBannerDiscount = styled.h1.attrs({
  className: 'block font-serif font-normal md:inline md:text-3xl text-2xl text-orange-burnt',
})`
  text-shadow: 2px 2px #f2caaf;
`;

const ProductDescription = styled.div.attrs({
  className: 'product-description ml-auto mr-auto md:text-center container',
})`
  margin-bottom: 55px;
  @media (min-width: 1024px) {
    margin-bottom: 112px;
  }
  p {
    max-width: 644px;
    margin: 0 auto;
  }
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
