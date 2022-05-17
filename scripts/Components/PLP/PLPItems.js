/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React from 'react';
import PLPItem from '../PLPItem';
import { getVariant } from '../../utils';

const PLPItems = ({ products }) => {
  return (
    <div className="grid justify-center">
      <div className="grid grid-cols-1 px-4 pt-10 justify-items-center gap-8 mb-12 max-w-screen-xxl md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => {
          let colorsArr = [];
          const colorIndex = product.options.findIndex(option => option === "Color");
          var color = '';
          {product.variants.map((variant, index) => {
            if(colorIndex === 0) {
              color = variant.option1;
            }
            else if(colorIndex === 1) {
              color = variant.option2;
            }
            else if(colorIndex === 2) { 
              color = variant.option3;
            }

            if (colorsArr.indexOf(color) === -1 && colorsArr.length <= 3) {
              colorsArr.push(color);
            }
          })}
          const newProduct = { ...product, variant: getVariant(product, colorsArr, colorIndex) };
          return (
            <PLPItem
              product={newProduct}
              colors={colorsArr}
              key={[product.id]}
            />
          );
        })}
      </div>
    </div>
  );
};

PLPItems.defaultProps = {
  collectionTitle: '',
  simpleLayout: false,
  holiday: false,
};

PLPItems.propTypes = {
  holiday: PropTypes.bool,
  collectionTitle: PropTypes.string,
  colorFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  simpleLayout: PropTypes.bool,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      featured_image: PropTypes.string,
      handle: PropTypes.string,
      id: PropTypes.number,
      options: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      price_max: PropTypes.number,
      price_min: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          featured_image: PropTypes.shape({
            alt: PropTypes.string,
            height: PropTypes.number,
            product_id: PropTypes.number,
            src: PropTypes.string,
            variant_ids: PropTypes.arrayOf(PropTypes.number),
            width: PropTypes.number,
          }),
          featured_media: PropTypes.shape({
            alt: PropTypes.string,
            id: PropTypes.number,
            position: PropTypes.number,
            preview_image: PropTypes.shape({
              aspect_ratio: PropTypes.number,
              height: PropTypes.number,
              src: PropTypes.string,
              width: PropTypes.number,
            }),
          }),
          id: PropTypes.number,
          name: PropTypes.string,
          option1: PropTypes.string,
          option2: PropTypes.string,
          option3: PropTypes.string,
          options: PropTypes.arrayOf(PropTypes.string),
          price: PropTypes.number,
          public_title: PropTypes.string,
          sku: PropTypes.string,
          taxable: PropTypes.bool,
          title: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default PLPItems;
