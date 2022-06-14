import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PLPItem from '../PLPItem';
import { getVariant } from '../../utils';
import InfiniteScroll from 'react-infinite-scroll-component';


const PLPItems = ({ products, totalProducts, loadMore }) => {

  return (
    <InfiniteScroll dataLength={products.length || 0} loader={''} hasMore={true}>
      <div className="grid justify-center container">
        <div className="grid grid-cols-1 justify-items-center gap-4 md:gap-6 mb-8 max-w-screen-xxl xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-18">
          {products.map((product) => {
            let colorsArr = ['Matte White', 'Matte Black', 'Walnut Wood'];
            // const newProduct = { ...product, variant: getVariant(product, colorsArr, colorIndex) };
            return <PLPItem product={product} colors={colorsArr} key={[product.id]} />;
          })}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {products.length < totalProducts && (
          <button className="load-more"
            style={{
              'height': '48px',
              'background': '#F4F2EC',
              'width': '173px',
              'borderRadius': '0px',
              'fontSize': '12px',
              'lineHeight': '20px !important',
              'color': '#000',
              'textTransform': 'uppercase',
              'display': 'flex',
              'alignItems': 'center',
              'justifyContent': 'center',
            }}
            onClick={loadMore}
          >
            Load more +
          </button>
        )}
      </div>
      {products.length < totalProducts && (
        <div
          style={{
            paddingTop: '16px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '16px',
            color: '#000000',
            opacity: '0.7',
          }}
        >{`${products.length}/${totalProducts} Products`}</div>
      )}
    </InfiniteScroll>
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