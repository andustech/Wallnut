import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SizeSwatch from '../../../SizeSwatch';
import ArrowDownIcon from '../../../Icons/ArrowDownIcon';

const getDefaultSize = (product, option1, option2) => {
  const sizeIndex = product.options.indexOf('Size');
  const size = sizeIndex === 0 ? option1 : option2;

  if (location.search.includes('variant=') || location.search.includes('size=')) {
    return size;
  }
  return '18" x 24"';
};

const PDPSizeFilter = ({ product, selectedVariant, setSelectedVariant, setCurrentOptions,  setFrameSelected, isSticky }) => {
  const { variants: originalVaraints } = product;
  const { option1, option2 } = selectedVariant;

  const [selectedSize, setSelectedSize] = useState(getDefaultSize(product, option1, option2));
  const [variants, setVariants] = useState(originalVaraints);
  const [sizeDropdown, setSizeDropdown] = useState('')

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
    setFrameSelected(selectedSize);
  }, [product.variants, setFrameSelected, selectedSize]);

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

  const handleSizeDropdown = () => {
    if(sizeDropdown === 'sizeDropdownVisible') {
      setSizeDropdown('')
    }
    else {
      setSizeDropdown('sizeDropdownVisible')
    }
  }
  
  let sizeArr = [];
  const sizeIndex = product.options.findIndex(option => option === "Size");
  return (
    <div id={ isSticky ? 'pdp-size-swatcher-sticky' : 'pdp-size-swatcher'} className={isSticky ? 'md:flex md:flex-row' : 'mb-5 lg:mb-8 overflow-x-auto'}>
      { isSticky ?
        <h5>
          Size
          <span className="mr-2 ml-2 lg:mr-4 lg:ml-4" onClick={() => handleSizeDropdown() }>{selectedSize}</span>
          <span onClick={() => handleSizeDropdown() } className="inline-block" ><ArrowDownIcon/></span>
        </h5>
      :
        <h5 className="mb-2 lg:mb-4">
        Size{' '}
          <>
            -{' '}
            <span>
              {sizeIndex === 0 ? option1 : option2}
            </span>
          </>
        </h5>
      }
      <ul className={ isSticky ? 'sizeDropdown '+sizeDropdown : 'flex flex-row gap-3 xl:gap-4'}>
        {product.variants.map((variant, i) => {
          const varSize = variant.options[sizeIndex];
          if (sizeArr.indexOf(varSize) === -1) {
            sizeArr.push(varSize);
            return (
              <li key={i}>
                <SizeSwatchContainer
                  isSelected={varSize === selectedSize}
                  isSticky={isSticky}
                  onClick={() => {
                    setSelectedSize(varSize);
                    handleSizeSelect(varSize);
                  }}
                  tabIndex={sizeIndex}
                  onKeyDown={() => {}}
                  role="button"
                  aria-label="change size"
                >
                  <SizeSwatch option={varSize} isSticky={isSticky} />
                </SizeSwatchContainer>
              </li>
            )
          }
        })}
      </ul>

    </div>
  );
};

const SizeSwatchContainer = styled.div.attrs(({ isSelected, isSticky }) => {
  let className =
    'relative grid justify-items-center items-center h-9 w-24 rounded-full border border-black';
  if (isSticky) {
    className = '';
  }

  if (isSelected) {
    className = `${className} opacity-100`;
  }
  else {
    className = `${className} opacity-40`;
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
