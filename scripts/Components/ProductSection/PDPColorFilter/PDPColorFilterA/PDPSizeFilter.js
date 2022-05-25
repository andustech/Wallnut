import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SizeSwatch from '../../../SizeSwatch';

const getDefaultSize = (product, option1, option2) => {
  const sizeIndex = product.options.indexOf('Size');
  const size = sizeIndex === 0 ? option1 : option2;

  if (location.search.includes('variant=') || location.search.includes('size=')) {
    return size;
  }
  return '18" x 24"';
};

const PDPSizeFilter = ({ product, selectedVariant, setSelectedVariant, setCurrentOptions }) => {
  const { variants: originalVaraints } = product;
  const { option1, option2 } = selectedVariant;
  const defaultSize = '18" x 24"';

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [variants, setVariants] = useState(originalVaraints);

  useEffect(() => {
    if (!location.search.includes('variant=')) {
      const defaultVariant = product.variants.find((variant) =>
        variant.title.includes('18" x 24"')
      );

      if (defaultVariant) {
        setSelectedVariant(defaultVariant);
        setCurrentOptions({
          option1: defaultVariant.option1,
          option2: defaultVariant.option2,
          option3: defaultVariant.option3,
        });
      }
    } else {
      setSelectedSize(getDefaultSize(product, option1, option2));
    }
    
  }, [
    product,
    setCurrentOptions,
    setSelectedVariant,
    selectedVariant,
    selectedSize,
    option1,
    option2,
  ]);

  useEffect(() => {
    setVariants(product.variants);
  }, [product.variants]);

  const handleSizeSelect = (size) => {
    const url = new URL(window.location);
    let params = url.searchParams
    const colorOptionIndex = product.options.indexOf('Frame Color');
    const sizeOptionIndex = product.options.indexOf('Size');
    let color = params.get('color');

    if(!color) {
      color = 'Matte Black'
    }

    const findVariant = variants.find((variantItem) => {
      return (
        variantItem.options[sizeOptionIndex] === size &&
        variantItem.options[colorOptionIndex] === color
      )
    });
    
    url.searchParams.set('variant', findVariant.id);
    url.searchParams.set('size', size);
    window.history.pushState('', '', url);

    setSelectedVariant(findVariant);

    setCurrentOptions({
      option1: findVariant.option1,
      option2: findVariant.option2,
      option3: findVariant.option3,
    });
    window.optimizely.push({
      type: 'event',
      eventName: 'handle-color-swatch',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });

  };
  
  let sizeArr = [];
  const sizeIndex = product.options.findIndex(option => option === "Size");
  return (
    <div id="pdp-size-swatcher">
      <h5 className="mb-4">
      Size{' '}
        <>
          -{' '}
          <span>
            {sizeIndex === 0 ? option1 : option2}
          </span>
        </>
      </h5>
      <ul className="grid grid-cols-4">
        {product.variants.map((variant, i) => {
          const varSize = variant.options[sizeIndex];
          if (sizeArr.indexOf(varSize) === -1) {
            sizeArr.push(varSize);
            return (
              <li key={i}>
                <SizeSwatchContainer
                  isSelected={varSize === selectedSize}
                  onClick={() => {
                    setSelectedSize(varSize);
                    handleSizeSelect(varSize);
                  }}
                  tabIndex={sizeIndex}
                  onKeyDown={() => {}}
                  role="button"
                  aria-label="change size"
                >
                  <SizeSwatch option={varSize} />
                </SizeSwatchContainer>
              </li>
            )
          }
        })}
      </ul>

    </div>
  );
};

const SizeSwatchContainer = styled.div.attrs(({ isSelected }) => {
  let className =
    'relative grid justify-items-center items-center h-9 w-24 rounded-full';

  if (isSelected) {
    className = `${className} border border-black`;
  }
  else {
    className = `${className} border border-gray`;
  }

  return {
    className,
  };
})``;

PDPSizeFilter.defaultProps = {
  selectedVariant: {
    option2: null,
    option3: null,
  },
};
PDPSizeFilter.propTypes = {
  product: PropTypes.shape({
    handle: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.shape({})),
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  selectedVariant: PropTypes.shape({
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string,
    option3: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
  setSelectedVariant: PropTypes.func.isRequired,
  currentOptions: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
  }).isRequired,
  setCurrentOptions: PropTypes.func.isRequired,
};
export default PDPSizeFilter;
