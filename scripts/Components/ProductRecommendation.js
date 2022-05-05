import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const trendData = [

  {
    title: 'Art Name',
    price: '$24 - $78',
    img: 'https://i.ibb.co/j39WMJ4/Rectangle-10.png',
  },
  {
    title: 'Art Name',
    price: '$74 - $97',
    img: 'https://i.ibb.co/qrsB8vj/Rectangle-11.png',
  },
  {
    title: 'Art Name',
    price: '$54 - $98',
    img: 'https://i.ibb.co/2y07y6f/Rectangle-12.png',
  },
  {
    title: 'Art Name',
    price: '$27 - $88',
    img:  'https://i.ibb.co/R4rNrfV/Rectangle-13.png',
  }
];

const ProductRecommendation = () => {


  // const TrendCardRow = styled.div.attrs({
  //   className: 'font-serif flex items-center md:flex-col relative',
  // })``




  return (

    <TrendingMainContainer>
      <SectionTiltle>
        <h2>Trending art</h2>
      </SectionTiltle>

      <TrendCardContainer className='container'>
        {trendData.map((value, i) => (

            <TrendCardRow key={i}>
              <div className='trend_card'>
                <img src={value.img} />
                <h6>{value.title}</h6>
                <p>{value.price}</p>
              </div>
            </TrendCardRow>
        )
        )}
      </TrendCardContainer>

    </TrendingMainContainer>

  );

};


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


export default ProductRecommendation;


