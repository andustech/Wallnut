import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PLPItem from '../PLPItem';
import { getVariant } from '../../utils';
import InfiniteScroll from 'react-infinite-scroll-component';
var lastIndex = 16;

const PLPItems = ({ products }) => {
  const [count, setCount] = useState([]);
  const [productFilterManage,setProductFilterManage]=useState([])
  
  useEffect(() => {
    setProductFilterManage(products.slice(0, lastIndex))
    setCount(products.slice(0, lastIndex));
  }, [products]);
  const loadMore = () => {
    lastIndex += 16;
    setCount(productFilterManage.slice(0, lastIndex));
    setProductFilterManage(products.slice(0, lastIndex))
  };

  return (
    <InfiniteScroll
      dataLength={products.length || 0}
      loader={''}
      hasMore={true}
    >
      <div className="grid justify-center container">
        <div className="grid grid-cols-1 justify-items-center gap-8 mb-8 max-w-screen-xxl md:grid-cols-2 xl:grid-cols-4 mt-18">
          {productFilterManage.map((product) => {
            let colorsArr = [];
            const colorIndex = product.options.findIndex((option) => option === 'Frame Color');
            var color = '';
            {
              product.variants.map((variant, index) => {
                if (colorIndex === 0) {
                  color = variant.option1;
                } else if (colorIndex === 1) {
                  color = variant.option2;
                } else if (colorIndex === 2) {
                  color = variant.option3;
                }

                if (colorsArr.indexOf(color) === -1 && colorsArr.length <= 3) {
                  colorsArr.push(color);
                }
              });
            }
            const newProduct = { ...product, variant: getVariant(product, colorsArr, colorIndex) };
            return <PLPItem product={newProduct} colors={colorsArr} key={[product.id]} />;
          })}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {products.length > lastIndex && (
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
            onClick={() => loadMore()}
          >
            Load more <img src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/PLUS-BLACK.svg?v=1653981285" style={{ marginLeft: '14px'}} alt="Plus" />
          </button>
        )}
      </div>
      <div
        style={{
          'paddingTop': '16px',
          'display': 'flex',
          'justifyContent': 'center',
          'color': '#000000',
          'opacity': '0.7',
          'fontWeight': '400',
          'fontSize': '12px',
          'lineHeight': '16px',
        }}
      >{`${count.length}/${products.length} Products`}</div>
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