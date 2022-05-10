import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const indexMoodSection = ({ settings }) => {
  const { section_title, image_1, button_text_1, button_link_1, image_2, button_text_2, button_link_2 } = settings;
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
      <ShopByMood className='container'>
        <SectionTiltle>
            { section_title && <h2 className="font-bold">{section_title}</h2> }
        </SectionTiltle>

        {/* <div className='mood_card_container flex '>
          {bymoodData.map((value, i) => (
            <a className='by_mood_card' key={i}>
              <img src={value.img} />
              <a href='#' className='premium_link bg-milk text-center'>{value.link}</a>
            </a>  
          ))}
        </div> */}

        <div className='mood_card_container flex '>
            <a className='by_mood_card'>
              { image_1 && <img src={image_1} /> }
              { button_text_1 && <a href={button_link_1} className='premium_link bg-milk text-center'>{button_text_1}</a> }
            </a>
            <a className='by_mood_card'>
              { image_2 && <img src={image_2} /> }
              { button_text_2 && <a href={button_link_2} className='premium_link bg-milk text-center'>{button_text_2}</a> }
            </a>
        </div>
      </ShopByMood>
    </>
  )

};

const ShopByMood = styled.div`
  margin-top: 112px;

  h2 {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.02em;
  }
`


export default indexMoodSection;
