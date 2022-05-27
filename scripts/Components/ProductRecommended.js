import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fetchRecommendations, getVariant } from '../utils';
import PLPItem from './PLPItem';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const ProductRecommended = ({ product, title }) => {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRecommendations(product?.id);
        setRecommendations(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [product.id]);

  return (
    <ProductRecommendationContainer>
      <SectionTiltle className='section_titile'>
        <h2 className="font-bold text-center text-black">{title}</h2>
      </SectionTiltle>
      <div className="grid grid-cols-1 overflow-hidden md:justify-items-center">
        <RecommendationContainer recommendations={recommendations}>
          {recommendations &&
            <>
              {recommendations.map((product, index) => {
                let colorsArr = [];
                const colorIndex = product.options.findIndex(option => option.name === "Frame Color");
                
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
                    key={[product.id]}
                    product={newProduct}
                    colors={colorsArr}
                  />
                );
              })}
            </>
          }
        </RecommendationContainer>
      </div>
    </ProductRecommendationContainer>
  );
};

const ProductRecommendationContainer = styled.div.attrs({
  className: 'px-2 py-8 mb-8 md:px-0 md:py-10 md:text-center',
})`
  @media (min-width: 740px) {
    margin-right: -8%;
    margin-left: -8%;
  }
`;

const RecommendationContainer = styled.div.attrs(({ recommendations }) => ({
  className: `container`,
}))`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

ProductRecommended.defaultProps = {
  product: {},
  title: '',
};

ProductRecommended.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
  }),
  title: PropTypes.string,
};

export default ProductRecommended;
