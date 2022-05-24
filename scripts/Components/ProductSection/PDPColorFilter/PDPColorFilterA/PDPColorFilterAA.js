import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorSwatch from '../../../ColorSwatch';

const getDefaultColor = (product, option1, option2) => {
  const colorIndex = product.options.indexOf('Frame Color');
  const color = colorIndex === 0 ? option1 : option2;

  if (location.search.includes('variant=') || location.search.includes('color=')) {
    return color;
  }
  return 'Matte Black';
};

const PDPColorFilter = ({ product, selectedVariant, setSelectedVariant, setCurrentOptions }) => {
  const { handle, variants: originalVaraints } = product;
  const { option1, option2 } = selectedVariant;
  const defaultColor = 'Matte Black';

  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [variants, setVariants] = useState(originalVaraints);

  useEffect(() => {
    if (!location.search.includes('variant=')) {
      const defaultVariant = product.variants.find((variant) =>
        variant.title.includes('Matte Black')
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
      setSelectedColor(getDefaultColor(product, option1, option2));
    }
  }, [
    handle,
    product,
    setCurrentOptions,
    setSelectedVariant,
    selectedVariant,
    selectedColor,
    option1,
    option2,
  ]);

  useEffect(() => {
    setVariants(product.variants);
  }, [product.variants]);

  const handleColorSelect = (color) => {

    const url = new URL(window.location);
    let params = url.searchParams
    const colorOptionIndex = product.options.indexOf('Frame Color');
    const sizeOptionIndex = product.options.indexOf('Size');
    let size = params.get('size');
    if(!size) {
      size = '18" x 24"'
    }

    const findVariant = variants.find((variantItem) => {
      return (
        variantItem.options[sizeOptionIndex] === size &&
        variantItem.options[colorOptionIndex] === color
      )
    });

    url.searchParams.set('variant', findVariant.id);
    url.searchParams.set('color', color);
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
  
  let colorsArr = [];
  const colorIndex = product.options.findIndex(option => option === "Frame Color");
  return (
    <div id="pdp-color-swatcher">
      <h5 className="mb-4">
      Choose a Frame{' '}
        <>
          -{' '}
          <span>
            {colorIndex === 0 ? option1 : option2}
          </span>
        </>
      </h5>
      <ul className="grid grid-cols-10">
        {product.variants.map((variant, i) => {
          const varColor = variant.options[colorIndex];
          if (colorsArr.indexOf(varColor) === -1) {
            colorsArr.push(varColor);
            return (
              <li key={i}>
                <ColorSwatchContainer
                  isSelected={varColor === selectedColor}
                  onClick={() => {
                    setSelectedColor(varColor);
                    handleColorSelect(varColor);
                  }}
                  tabIndex={colorIndex}
                  onKeyDown={() => {}}
                  role="button"
                  aria-label="change color"
                >
                  <ColorSwatch option={varColor} />
                </ColorSwatchContainer>
              </li>
            )
          }
        })}
      </ul>
    </div>
  );
};

const ColorSwatchContainer = styled.div.attrs(({ isSelected }) => {
  let className =
    'relative grid justify-items-center items-center h-8 w-8 rounded-full';

  if (isSelected) {
    className = `${className} border-2 border-black`;
  }
  else {
    className = `${className}`;
  }

  return {
    className,
  };
})``;

PDPColorFilter.defaultProps = {
  selectedVariant: {
    option2: null,
    option3: null,
  },
};
PDPColorFilter.propTypes = {
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
export default PDPColorFilter;
