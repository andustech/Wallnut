import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  convertPriceFromNumber,
  getSingleViewImage,
  getPriceInRanges,
  isMobile,
  herringboneGroups,
  whiteGroups,
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
  const colorIndex = product.option_names.indexOf('Frame Color');
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
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
    // const newVariant = product.variants.find((item) => {
    //   if (colorIndex === 0) {
    //     return item.option1 === color;
    //   } else {
    //     return item.option2 === color;
    //   }
    // });
    setCurrentOption(color);
    setColorOption(color);
  };
  if (product.tags.includes('Gift card')) {
    if (colorFilters && colorFilters.length > 0) return null;
    const variantName = product.tags.includes('Extra Cover') ? chairCoverVariant : 'e-gift-card';
    return (
      <ItemContainer
        ref={PLPItemRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative overflow-hidden trend_card">
          <a href={getProductUrl(product, colorOption, collectionTitle)}>
            <div className="bg-grey">
              <Media
                alt={`${product.handle.replace(/-/g, ' ')}`}
                image={getSingleViewImage(product, variantName)}
              />
            </div>
          </a>
        </div>
        <a className="no-underline" href={getProductUrl(product, colorOption, collectionTitle)}>
          <TitlePriceContainer>
            <span className="">{product.title}</span>
            <span className="">
              {product.compare_at_price ? (
                <div>
                  <span className="text-errorRed">
                    {convertPriceFromNumber(product.price_min)} -{' '}
                    {convertPriceFromNumber(product.price_max)}
                  </span>
                  <span className="ml-2 text-grey-dark font-normal line-through">
                    {convertPriceFromNumber(product.compare_at_price_min)} -
                    {convertPriceFromNumber(product.compare_at_price_max)}
                  </span>
                </div>
              ) : (
                <>
                  {convertPriceFromNumber(product.price_min)} -
                  {convertPriceFromNumber(product.price_max)}
                </>
              )}
            </span>
          </TitlePriceContainer>
        </a>
      </ItemContainer>
    );
  }
  // let productImage = [];
  // if (product.media) {
  //   productImage = product.variants.find((item) => {
  //     return currentOption.id === item.id;
  //   });
  // } else {
  //   productImage = product.images.find((item) => {
  //     return currentOption.id === item.variant_ids[0];
  //   });
  // }
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
              <div className="top">
                <Media
                  alt={`${product.handle}-${currentOption}`}
                  image={productImgSrc}
                  
                />
              </div>
              <div className="bottom">
                <Media
                  alt={`${product.handle}-${currentOption}`}
                  image={`${cdnUrl}${product.handle.slice(0, -3)}B-${imgColor}-1824.jpg`}
                />
              </div>
            </ImageContainer>
          )}
        </a>
      </div>
      <a className="no-underline" href={getProductUrl(product, colorOption, collectionTitle)}>
        <TitlePriceContainer>
          <h6 className="pro_title">{product.title}</h6>
          
          {/* <p className="pro_price">{getPriceInRanges(product.variants_min_price, product.variants_max_price)}</p> */}
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
    tags: PropTypes.arrayOf(PropTypes.string),
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
const HoverContainer = styled.div(({ isHovered }) => [
  tw`absolute w-full`,
  isHovered && tw`visible`,
  !isHovered && tw`hidden`,
  `bottom: 0;`,
]);
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