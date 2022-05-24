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
  return description?.length > n ? description.substr(0, n - 1) + "... " : description;
};

const ProductSelector = ({
  product,
  currentVariant,
  reviews,
  reviewsRef = {},
  descriptionRef = {},
  discount,
  productMessaging,
}) => {
  const { handle } = product;
  const { option1, option2, option3 } = currentVariant;
  const [selectedVariant, setSelectedVariant] = useState(
    getCurrentVariant(product, currentVariant)
  );
  const [currentOptions, setCurrentOptions] = useState({ option1, option2, option3 });
  const [showStickySubmit, setShowStickySubmit] = useState(false);
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

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio !== 1 && entry.target.getBoundingClientRect().top < 0) {
            setShowStickySubmit(true);
          } else {
            setShowStickySubmit(false);
          }
        });
      },
      { threshold: 1 }
    );

    intersectionObserver.observe(submitRef.current);
  }, [product, selectedVariant]);

  useEffect(() => {
    setSelectedVariant(currentVariant);
  }, [currentVariant]);

  return (
    <ProductSelectorContainer>
      <Carousel images={getCurrentImages(product, selectedVariant)} />
      <ProductFormContainer handle={handle}>
        <form
          className="mb-3 md:pr-10"
          onSubmit={(e) => handleAddToCart(e, product, qty, selectedVariant.id)}
        >
          <div>
            <div className="invisible opacity-0 lg:visible lg:opacity-100">
              <SectionTiltle className='section_titile pdp'>
                <h2 className="font-bold text-left">{product.title}</h2>
              </SectionTiltle>
              <div
                className='mb-1'
                onClick={() => scrollToReviews()}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                {reviews.reviews && (
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
                <div className='read-more-desc border-b inline border-black'
                  onClick={() => scrollToDescription()}
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                >Read More</div>
              </ProductShortDescription>
            </div>

            {handle !== 'e-gift-card' && (
              <>
                <PDPSizeFilter
                  product={product}
                  selectedVariant={selectedVariant}
                  setSelectedVariant={setSelectedVariant}
                  currentOptions={currentOptions}
                  setCurrentOptions={setCurrentOptions}
                />
                <PDPColorFilter
                  product={product}
                  selectedVariant={selectedVariant}
                  setSelectedVariant={setSelectedVariant}
                  currentOptions={currentOptions}
                  setCurrentOptions={setCurrentOptions}
                  selectOptions={selectOptions}
                />
              </>
            )}

            <IncludesContainer>Includes<br/>Framed print and wall mounting system</IncludesContainer>

            <div className="grid grid-cols-4 my-4">
              <div className="border-grey-50 border-solid center md:border-none col-span-3 ml-4">
                <AddToCartSubmitInput
                  ref={submitRef}
                  type="submit"
                  name="button"
                  value="Add to Cart"
                />
                <StickyAddToCartContainer showStickySubmit={showStickySubmit}>
                  <div className="w-20 my-auto ml-2 justify-self-end col-span-3">
                    <ProductQty qty={qty} setQty={setQty} />
                  </div>
                  <div className="col-span-2 my-auto ml-3 font-serif font-xl">
                    {convertPriceFromNumber(selectedVariant.price)}
                  </div>
                  <StickyAddToCartInput type="submit" value="Add to Cart" />
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
  let className = 'ml-12 w-full md:w-8/12 lg:w-5/12';
  return {
    className,
  };
})``;

const AddToCartSubmitInput = styled.input.attrs({
  className:
    'AddtoCart pb-0 pt-0 mb-0 md:py-0.5 w-55 h-12',
})``;

const StickyAddToCartContainer = styled.div.attrs(({ showStickySubmit }) => {
  let className = 'fixed mb-0 px-2 w-full bg-white md:hidden';

  if (showStickySubmit) {
    className = `${className} grid grid-cols-10 left-0 bottom-0 rounded-none border-t border-gray-light h-16 z-20`;
  } else {
    className = `${className} hidden`;
  }

  return {
    className,
  };
})``;

const ProductShortDescription = styled.div.attrs({
  className:
    'short-description',
})`
font-family: 'GoodSans';
font-weight: 400;
font-size: 14px;
line-height: 22px;
letter-spacing: -0.01em;
margin-bottom: 32px;`;

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
  className:
    'AddtoCart col-span-4 pt-0 text-sm px-0 font-light h-10 leading-none my-auto ml-4 mb-3 ',
})``;

export default ProductSelector;
