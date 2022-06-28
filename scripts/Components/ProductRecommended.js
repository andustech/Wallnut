import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fetchRecommendations } from '../utils';
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
        <h3 className="font-bold text-center text-black">{title}</h3>
      </SectionTiltle>
      <div className="grid grid-cols-1 overflow-hidden md:justify-items-center">
        <RecommendationContainer recommendations={recommendations}>
          {recommendations &&
            <>
              {recommendations.map((product, index) => {
                let colorsArr = ['Matte Black', 'Walnut Wood', 'Matte White'];
                return (
                  <PLPItem
                    key={[product.id]}
                    product={product}
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
  className: `container`,
})`
  margin-top: 55px;
  @media (min-width: 1024px) {
    margin-top: 112px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const RecommendationContainer = styled.div.attrs ({
  className: 'gap-6',
})`
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
