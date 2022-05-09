import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const indexMoodSection = ({ settings }) => {
  const { image, section_title, title, subheading, button_text, button_link } = settings;
  const bymoodData = [

    {
      img: 'https://i.ibb.co/Lgzd5b9/Rectangle-14.png',
      link: 'Playful',
    },

    {
      img: 'https://i.ibb.co/b27wX67/Rectangle-15.png',
      link: 'Sophisticated',
    } 
  ];

  return (
    <>
      <WhiteCollectionContainer className='container flex'>
        <div className='white_coll_left'>
          <img src={image} alt="Collection" />
        </div>
        <div className='white_coll_right'>
          <div className='item_box'>
            { section_title && <div className='title_top'>{section_title}</div> }
          
            <MiddContent>
              { title && <h2 className="font-bold">{title}</h2> }
              { subheading && <p>{subheading}</p> }
              { button_text && <a className='premium_link bg-milk' href={button_link}>{button_text}</a> }
            </MiddContent>
          </div>
        </div>
      </WhiteCollectionContainer>


      <ShopByMood className='container'>
        <SectionTiltle>
          <h2>Shop by mood</h2>
        </SectionTiltle>

        <div className='mood_card_container flex '>
          {bymoodData.map((value, i) => (
            <a className='by_mood_card' key={i}>
              <img src={value.img} />
              <a href='#' className='premium_link bg-milk text-center'>{value.link}</a>
            </a>  
          ))}
        </div>
      </ShopByMood>

    </>
  )

};



const WhiteCollectionContainer = styled.div`

`;

const MiddContent = styled.div`

  h2 {
    font-size: 48px !important;
    margin-bottom: 20px;
    line-height: 66px;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 48px !important;
    margin-bottom: 31px !important;
    font-family: 'AttilaSansUniform-Medium';
    font-weight: 500;
    letter-spacing: -0.005em;
    line-height: 56px;
  }

  a {
    position: relative;
    padding: 14px 63px 14px 30px;
  }

  a:after {
  content: '';
  width: 17px;
  height: 10px;
  right: 30px;
  top: 18px;
  position: absolute;
  background-image: url('https://i.ibb.co/mhJXcrZ/Vector.png');
}
`;



const ShopByMood = styled.div`
  margin-top: 112px;
`


export default indexMoodSection;
