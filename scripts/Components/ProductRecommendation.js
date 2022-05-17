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
            setRecommendations(oldArray => [...oldArray, response]);
          })
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [blocks, setRecommendations]);

  const getVariant = (recommendation, colorsArr, colorIndex) => {
    if(colorIndex === 0) {
      const productVariant = recommendation.variants.find(
        (variant) => variant.option1 === colorsArr[0]
      );
      return productVariant;
    }
    else if(colorIndex === 1) {
      const productVariant = recommendation.variants.find(
        (variant) => variant.option2 === colorsArr[0]
      );
      return productVariant;
    }
    else if(colorIndex === 2) {
      const productVariant = recommendation.variants.find(
        (variant) => variant.option3 === colorsArr[0]
      );
      return productVariant;
    }
  };

  return (
    <ProductRecommendationContainer>
      <SectionTiltle className='section_titile'>
          <h2 className="font-bold">{settings.title}</h2>
      </SectionTiltle>
      <div className="">
        <RecommendationContainer recommendations={recommendations}>
        {recommendations &&
          <>
            {recommendations.map((product, index) => {
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
}))``;

const TrendingMainContainer = styled.div`
padding: 112px 0;
`

const TrendCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px !important;
  justify-content: space-between;

`
// const TrendCardRow = styled.div``
const TrendCardRow = styled.div`
 display: flex;
 align-items: center;
 position: relative;
`;

const RadioChoice = styled.div`
  input {
    margin: 0 4px;
    cursor: pointer;
  }

  input:first-child {
    margin-left: 0;
  }

  input:last-child {
    margin-right: 0;
  }
`;


export default ProductRecommendation;