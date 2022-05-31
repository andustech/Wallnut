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

  const getVariant = (recommendation, colorsArr, colorIndex) => {
    if (colorIndex === 0) {
      const productVariant = recommendation.variants.find(
        (variant) => variant.option1 === colorsArr[0]
      );
      return productVariant;
    } else if (colorIndex === 1) {
      const productVariant = recommendation.variants.find(
        (variant) => variant.option2 === colorsArr[0]
      );
      return productVariant;
    } else if (colorIndex === 2) {
      const productVariant = recommendation.variants.find(
        (variant) => variant.option3 === colorsArr[0]
      );
      return productVariant;
    }
  };

  return (
    <ProductRecommendationContainer>
      <SectionTiltle className="section_titile">
        <h3 className="font-bold text-black">{settings?.title}</h3>
      </SectionTiltle>
      <div className="container">
        <RecommendationContainer recommendations={recommendations}>
          {recommendations && (
            <>
              {recommendations.map((product, index) => {
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
                const newProduct = {
                  ...product,
                  variant: getVariant(product, colorsArr, colorIndex),
                };
                return <PLPItem key={[product.id]} product={newProduct} colors={colorsArr} />;
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
