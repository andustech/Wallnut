import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Carousel from '../../Carousel';
import { convertPriceFromNumber, handleAddToCart, getCurrentImages } from '../../../utils';
import AfterPayCopy from '../../AfterPayCopy';
import YotpoReviewStars from '../../YotpoReviewStars';
import ProductQty from '../../ProductQty';
import PDPColorFilter from '../PDPColorFilter';
import PDPSizeFilter from '../PDPColorFilter/PDPColorFilterA/PDPSizeFilter';
import PDPMessaging from './PDPMessaging';
import { SectionTiltle } from '../../ProductFeature/ValuePropComponent';

const getProductOptions = (product, selectedVariant, optionKey) => {
  const options = product.variants.reduce((acc, variant) => {
    if (optionKey === 'option1') {
      acc.push(variant[optionKey]);
    }

    if (variant.option1 === selectedVariant.option1) {
      acc.push(variant[optionKey]);
    }

    return acc;
  }, []);

  return [...new Set(options)];
};

const getOptions = (product, selectedVariant) => {
  const allOptions = product.options.reduce((acc, option, i) => {
    const optionKey = `option${i + 1}`;

    acc.push({
      name: option,
      options: getProductOptions(product, selectedVariant, optionKey),
    });

    return acc;
  }, []);

  return allOptions;
};

const getCurrentVariant = (product, currentVariant) => {
  const params = new URLSearchParams(window.location.search);
  const variantId = parseInt(params.get('variant'), 10);

  if (variantId && currentVariant.id !== variantId) {
    const newVariant = product.variants.find((item) => item.id === variantId);

    return newVariant || currentVariant;
  }

  return currentVariant;
};

const getShortDescription = (description, n) => {
  description = description.replace(/<(.|\n)*?>/g, '');
  return description?.length > n ? description.substr(0, n - 1) + '... ' : description;
};

const ProductSelector = ({
  setFrameColorSelected,
  setFrameSelected,
  product,
  currentVariant,
  reviews,
  enableReviews,
  reviewsRef = {},
  descriptionRef = {},
  discount,
  productMessaging,
}) => {

  console.log('enableReviews', enableReviews)
  const { handle } = product;
  const { option1, option2, option3 } = currentVariant;
  const [selectedVariant, setSelectedVariant] = useState(
    getCurrentVariant(product, currentVariant)
  );
  const [currentOptions, setCurrentOptions] = useState({ option1, option2, option3 });
  //const [showStickySubmit, setShowStickySubmit] = useState(false);
  const [qty, setQty] = useState(1);
  const selectOptions = getOptions(product, selectedVariant);

  const submitRef = useRef();

  const scrollToReviews = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: reviewsRef.current.offsetTop,
    });
  };

  const scrollToDescription = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: descriptionRef.current.offsetTop,
    });
  };

  // useEffect(() => {
  //   const intersectionObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.intersectionRatio !== 1 && entry.target.getBoundingClientRect().top < 0) {
  //           setShowStickySubmit(true);
  //         } else {
  //           setShowStickySubmit(false);
  //         }
  //       });
  //     },
  //     { threshold: 1 }
  //   );

  //   intersectionObserver.observe(submitRef.current);
  // }, [product, selectedVariant]);

  useEffect(() => {
    setSelectedVariant(currentVariant);
  }, [currentVariant]);

  return (
    <ProductSelectorContainer>
      <MobileTopContainer>
        <SectionTiltle className="section_titile pdp">
          <h2 className="font-bold text-left">{product.title}</h2>
        </SectionTiltle>
        <div
          className="mb-1"
          onClick={() => scrollToReviews()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {reviews.reviews && enableReviews && (
            <YotpoReviewStars
              stars={reviews.bottomline.average_score}
              totalReviews={reviews.bottomline.total_review}
              location="product-header"
            />
          )}
        </div>
        <div className="grid grid-cols-10 border-none text-sm mb-1">
          <div className="col-span-7">
            <span id="pdp-product-price">
              {product.compare_at_price ? (
                <div className="md:w-80">
                  <span className="font-normal text-errorRed text-2xl md:text-3xl">
                    {convertPriceFromNumber(selectedVariant.price)}
                  </span>
                  <span className="ml-1 line-through text-sm">
                    {convertPriceFromNumber(selectedVariant.compare_at_price)}
                  </span>
                  <span className="ml-2 text-errorRed text-xl md:text-2xl">{discount}% Off</span>
                </div>
              ) : (
                convertPriceFromNumber(selectedVariant.price)
              )}
            </span>
          </div>
        </div>
        <ByName>
          <p>By: Sarah smith</p>
          <p>New York, NY</p>
        </ByName>
      </MobileTopContainer>
      <Carousel images={getCurrentImages(product, selectedVariant)} />
      <ProductFormContainer handle={handle}>
        <form
          className="mb-3 md:pr-10"
          onSubmit={(e) => handleAddToCart(e, product, qty, selectedVariant.id)}
        >
          <div>
            <DesktopTopContainer>
              <SectionTiltle className="section_titile pdp">
                <h2 className="font-bold text-left text-black">{product.title}</h2>
              </SectionTiltle>
              <div
                className="mb-1"
                onClick={() => scrollToReviews()}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                {reviews.reviews && enableReviews && (
                  <YotpoReviewStars
                    stars={reviews.bottomline.average_score}
                    totalReviews={reviews.bottomline.total_review}
                    location="product-header"
                  />
                )}
              </div>

              <div className="grid grid-cols-10 border-none text-sm mb-1">
                <div className="col-span-7">
                  <span id="pdp-product-price">
                    {product.compare_at_price ? (
                      <div className="md:w-80">
                        <span className="font-normal text-errorRed text-2xl md:text-3xl">
                          {convertPriceFromNumber(selectedVariant.price)}
                        </span>
                        <span className="ml-1 line-through text-sm">
                          {convertPriceFromNumber(selectedVariant.compare_at_price)}
                        </span>
                        <span className="ml-2 text-errorRed text-xl md:text-2xl">
                          {discount}% Off
                        </span>
                      </div>
                    ) : (
                      convertPriceFromNumber(selectedVariant.price)
                    )}
                  </span>
                </div>
              </div>

              <AfterPayCopy price={selectedVariant.price} product={product.title} />

              <ByName>
                <p>By: Sarah smith</p>
                <p>New York, NY</p>
              </ByName>

              <ProductShortDescription>
                {getShortDescription(product.description, 49)}
                <div
                  className="read-more-desc border-b inline border-black"
                  onClick={() => scrollToDescription()}
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                >
                  Read More
                </div>
              </ProductShortDescription>
            </DesktopTopContainer>

            {handle !== 'e-gift-card' && (
              <>
                <PDPSizeFilter
                  setFrameSelected={setFrameSelected}
                  product={product}
                  selectedVariant={selectedVariant}
                  setSelectedVariant={setSelectedVariant}
                  currentOptions={currentOptions}
                  setCurrentOptions={setCurrentOptions}
                />
                <PDPColorFilter
                  setFrameColorSelected={setFrameColorSelected}
                  product={product}
                  selectedVariant={selectedVariant}
                  setSelectedVariant={setSelectedVariant}
                  currentOptions={currentOptions}
                  setCurrentOptions={setCurrentOptions}
                  selectOptions={selectOptions}
                />
              </>
            )}

            <IncludesContainer>
              Includes
              <br />
              Framed print and wall mounting system
            </IncludesContainer>

            <div className="flex flex-row pb-8 border-b border-gray">
              <div className="mr-4">
                <AddToCartSubmitInput
                  ref={submitRef}
                  type="submit"
                  name="button"
                  value="Add to Cart"
                />
                <StickyAddToCartContainer showStickySubmit={true}>
                  <div className="container flex flex-row">
                    <StickyAddToCartTitleContainer>
                      <StickyAddToCartTitle>{product.title}</StickyAddToCartTitle>
                      <span>{convertPriceFromNumber(selectedVariant.price)}</span>
                    </StickyAddToCartTitleContainer>
                    <div className="sticky-right flex flex-row">
                      {handle !== 'e-gift-card' && (
                        <PDPSizeFilter
                          setFrameSelected={setFrameSelected}
                          product={product}
                          selectedVariant={selectedVariant}
                          setSelectedVariant={setSelectedVariant}
                          currentOptions={currentOptions}
                          setCurrentOptions={setCurrentOptions}
                          isSticky={true}
                        />
                      )}
                      {handle !== 'e-gift-card' && (
                        <PDPColorFilter
                          setFrameColorSelected={setFrameColorSelected}
                          product={product}
                          selectedVariant={selectedVariant}
                          setSelectedVariant={setSelectedVariant}
                          currentOptions={currentOptions}
                          setCurrentOptions={setCurrentOptions}
                          selectOptions={selectOptions}
                          isSticky={true}
                        />
                      )}
                      <StickyAddToCartInput type="submit" value="Add to Cart" />
                    </div>
                  </div>
                </StickyAddToCartContainer>
              </div>
              <ProductQty qty={qty} setQty={setQty} marginTop="1" />
            </div>
            <PDPMessaging productMessaging={productMessaging} />
          </div>
        </form>
      </ProductFormContainer>
    </ProductSelectorContainer>
  );
};

ProductSelector.defaultProps = {
  product: {
    variants: [],
  },
  reviews: {},
  enableReviews: false,
  reviewsRef: {},
  descriptionRef: {},
  discount: '0',
  productMessaging: {},
  // productFeature: false,
};

ProductSelector.propTypes = {
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
    metafields: PropTypes.shape({
      productTitle: PropTypes.string,
      styleOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
      legOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
      amountOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    }),
  }),
  currentVariant: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  reviews: PropTypes.shape({
    bottomline: PropTypes.shape({
      average_score: PropTypes.number,
      total_review: PropTypes.number,
    }),
    reviews: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  reviewsRef: PropTypes.shape({
    current: PropTypes.shape({
      offsetTop: PropTypes.number,
    }),
  }),
  descriptionRef: PropTypes.shape({
    current: PropTypes.shape({
      offsetTop: PropTypes.number,
    }),
  }),
  discount: PropTypes.string,
  productMessaging: PropTypes.shape({
    shippingMessage: PropTypes.string,
    shippingTime: PropTypes.string,
    shippingMessageInfo: PropTypes.string,
    shippingMessageInfoHeight: PropTypes.number,
  }),
  handleSelectingOption: PropTypes.func.isRequired,
};

const ProductSelectorContainer = styled.div.attrs({
  className: 'flex flex-col max-w-screen-xl lg:flex-row',
})``;

const ProductFormContainer = styled.div.attrs(({ handle }) => {
  let className = 'lg:ml-12 w-full md:w-8/12 lg:w-5/12';
  return {
    className,
  };
})``;

const AddToCartSubmitInput = styled.input.attrs({
  className: 'AddtoCart pb-3 pt-3 my-0',
})`
  width: 231px;
  border-radius: 0 !important;
  background-color: #f1946a !important;
  font-family: 'GoodSans' !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  letter-spacing: 0.05em !important;
  text-transform: uppercase !important;
  color: #000000 !important;
  padding: 0 !important;
`;

const StickyAddToCartContainer = styled.div.attrs(({ showStickySubmit }) => {
  let className = 'fixed mb-0 px-2 w-full';

  if (showStickySubmit) {
    className = `${className} left-0 bottom-0 rounded-none z-20 pt-4 pb-4`;
  } else {
    className = `${className} hidden`;
  }

  return {
    className,
  };
})`
  align-items: center;
  background: #F4F2EC;
  .container {
    justify-content: space-between;
    align-items: center;
  }
`;

const ProductShortDescription = styled.div.attrs({
  className: 'short-description',
})`
  font-family: 'GoodSans';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  margin-bottom: 32px;
`;

const StickyAddToCartTitleContainer = styled.div.attrs({
  className: 'section_titile sticky-add-to-cart',
})`
  margin-bottom: 0 !important;
`;

const StickyAddToCartTitle = styled.h3.attrs({
  className: 'mr-6',
})`
  font-size: 14px !important;
  line-height: 19px !important;
  color: #000000;
  letter-spacing: -0.02em !important;
  display: inline-block;
`;

const ByName = styled.div`
  margin-bottom: 16px;
  p {
    font-family: 'GoodSans';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    margin-bottom: 4px;
  }
`;

const IncludesContainer = styled.div`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.01em;
  font-family: 'GoodSans';
`;

const AfterPayContainer = styled.div.attrs({})`
  & .afterpay-paragraph {
    white-space: nowrap;
    margin-top: 10px;
  }
`;

const StickyAddToCartInput = styled.input.attrs({
  className: 'AddtoCart pb-3 pt-3 my-0',
})`
  width: 153px;
  border-radius: 0 !important;
  background-color: #f1946a !important;
  font-family: 'GoodSans' !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  letter-spacing: 0.05em !important;
  text-transform: uppercase !important;
  color: #000000 !important;
  padding: 0 !important;
`;

const MobileTopContainer = styled.div.attrs({
  className: 'lg:hidden',
})``;

const DesktopTopContainer = styled.div.attrs({})`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export default ProductSelector;
