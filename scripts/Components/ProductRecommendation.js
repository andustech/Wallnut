import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';
import { fetchProductByHandle } from '../utils';
import PLPItem from './PLPItem';

const ProductRecommendation = ({ blocks, settings }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        {
          blocks.map(async (block, index) => {
            const { settings } = block;
            const response = await fetchProductByHandle(settings, settings);
            setRecommendations((oldArray) => [...oldArray, response]);
          });
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [blocks, setRecommendations]);

  return (
    <ProductRecommendationContainer>
      <SectionTiltle className="section_titile mb-5 md:mb-10">
        <h3 className="font-bold text-black">{settings?.title}</h3>
      </SectionTiltle>
      <div className="container">
        <RecommendationContainer recommendations={recommendations}>
          {recommendations && (
            <>
              {recommendations.map((product) => {
                let colorsArr = ['Matte Black', 'Walnut Wood', 'Matte White'];
                return <PLPItem key={[product.id]} product={product} colors={colorsArr} />;
              })}
            </>
          )}
        </RecommendationContainer>
      </div>
    </ProductRecommendationContainer>
  );
};

const ProductRecommendationContainer = styled.div.attrs({
  className: 'md:text-center section-padding',
})`
  @media (min-width: 740px) {
  }
`;

const RecommendationContainer = styled.div.attrs(({ recommendations }) => ({
  className: `prod-list gap-6`,
}))``;

export default ProductRecommendation;
