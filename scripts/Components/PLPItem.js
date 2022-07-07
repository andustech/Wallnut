import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  convertPriceFromNumber,
  getPriceInRanges,
  isMobile,
} from '../utils';
import ColorSwatch from './ColorSwatch';
import Media from './Media';

const getProductUrl = (product, colorOption) => {
  let productHandle = product.handle;
  if (colorOption) {
    const color = colorOption.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

    return `/products/${productHandle}?color=${color}`;
  }
  return `/products/${productHandle}`;
};

const PLPItem = ({ product, colors = [], colorFilters = [], noColorSelector, collectionTitle }) => {
  const [hover, setHover] = useState(false);
  const [currentOption, setCurrentOption] = useState('Matte Black');

  //Define static colors for custom order
  let staticColors = ['Matte Black', 'Walnut Wood', 'Matte White'];
  const [colorOption, setColorOption] = useState(staticColors[0]);

  const PLPItemRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const isObservable = isMobile(navigator) && mediaQuery.matches && PLPItemRef.current;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 1) {
            setHover(false);
          } else {
            setHover(true);
          }
        });
      },
      { threshold: 1 }
    );

    if (isObservable) {
      intersectionObserver.observe(PLPItemRef.current);
    }

    window.addEventListener('resize', () => {
      if (!mediaQuery.matches && PLPItemRef.current) {
        intersectionObserver.unobserve(PLPItemRef.current);
      } else if (isObservable) {
        intersectionObserver.observe(PLPItemRef.current);
      }
    });
  }, []);

  const handleColorChange = (color) => {
    setCurrentOption(color);
    setColorOption(color);
  };

  const cdnUrl = 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/';
  var imgColor = '';
  if (colorOption === 'Matte White') {
    imgColor = 'white';
  } else if (colorOption === 'Matte Black') {
    imgColor = 'black';
  } else if (colorOption === 'Walnut Wood') {
    imgColor = 'walnut';
  }

  var productHandle = product.handle;
  var hasArt = productHandle.slice(-4);
  if (hasArt === '-art') {
    productHandle = productHandle.slice(0, -4)
  }

  var productImgSrc = 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/'+productHandle+'-A-'+imgColor+'-2432.jpg'

  if (!productImgSrc) {
    productImgSrc =
      'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/600x900.png?v=1653804158';
  }

  const mobileMediaQuery = window.matchMedia('(min-width: 768px)');

  return (
    <ItemContainer className="each-item">
      <div className="relative overflow-hidden bg-gray-50">
        <a href={getProductUrl(product, colorOption, collectionTitle)}>
          {currentOption && (
            <ImageContainer
              isHovered={hover}
              noColorSelector={noColorSelector}
              ref={PLPItemRef}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="img-wrap">
                <Media
                  alt={`${product.handle}-${currentOption.toLowerCase().trim()}`}
                  image={productImgSrc}
                />
              </div>
              { mobileMediaQuery.matches && (
                <div className="img-wrap hover">
                  <Media
                    alt={`${product.handle}-${currentOption.toLowerCase().trim()}`}
                    image={`${cdnUrl}${product.handle.slice(0, -3)}B-${imgColor}-1824.jpg`}
                  />
                </div>
              )}
            </ImageContainer>
          )}
        </a>
      </div>
      <a className="no-underline" href={getProductUrl(product, colorOption, collectionTitle)}>
        <TitlePriceContainer>
          <h6 className="pro_title">{product.title}</h6>
          <p className="pro_price">{getPriceInRanges(product.price_min, product.price_max)}</p>
        </TitlePriceContainer>
      </a>
      {!noColorSelector && (
        <ColorContainer>
          <div>
            <div className="flex">
              {staticColors.map((color) => {
                return (
                  <ColorSwatchWrapper
                    border={color === colorOption}
                    onClick={() => handleColorChange(color)}
                    onKeyUp={() => {}}
                    role="button"
                    tabIndex="0"
                    key={color}
                  >
                    <ColorSwatch option={color} size="small" />
                  </ColorSwatchWrapper>
                );
              })}
            </div>
          </div>
        </ColorContainer>
      )}
    </ItemContainer>
  );
};

PLPItem.defaultProps = {
  noColorSelector: false,
  colors: [],
  colorFilters: [],
  collectionTitle: '',
};

PLPItem.propTypes = {
  noColorSelector: PropTypes.bool,
  colorFilters: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
  product: PropTypes.shape({
    title: PropTypes.string,
    handle: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    compare_at_price: PropTypes.number,
    compare_at_price_max: PropTypes.number,
    compare_at_price_min: PropTypes.number,
    price_max: PropTypes.number,
    price_min: PropTypes.number,
    tags: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        option1: PropTypes.string,
        option2: PropTypes.string,
      })
    ),
    variant: PropTypes.shape({
      option1: PropTypes.string,
    }),
  }).isRequired,
  collectionTitle: PropTypes.string,
};

const ItemContainer = styled.div(() => [tw`flex flex-col cursor-pointer`, `max-width: 520px;`, `
  @media only screen and (max-width: 990px) {
    max-width: 300px;
  }
  @media only screen and (max-width: 767px) {
    max-width: 250px;
  }
  @media only screen and (max-width: 575px) {
    max-width: 200px;
  }
`]);

const TitlePriceContainer = styled.div.attrs({
  className: 'flex justify-start flex-col text-left mt-2.5 md:mt-3.5 lg:mt-3', 
})``;

const ImageContainer = styled.div.attrs ({
    className: 'list-img-wrap',
})``;

const ColorContainer = styled.div.attrs({
  className: 'flex w-full justify-between',
})``;

const ColorSwatchWrapper = styled.div.attrs(({ border }) => {
  const borderStyle = border ? 'border border-black' : '';
  return {
    className: `w-5 h-5 mr-1 lg:mr-0 xxl:mr-1 rounded-full grid justify-items-center items-center ${borderStyle} `,
  };
})``;

export default PLPItem;
