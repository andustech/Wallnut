import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const indexMoodSection = ({ settings }) => {
  const {
    section_title,
    image_1,
    button_text_1,
    button_link_1,
    image_2,
    button_text_2,
    button_link_2,
  } = settings;
  const bymoodData = [
    {
      img: 'https://i.ibb.co/Lgzd5b9/Rectangle-14.png',
      link: 'Playful',
    },

    {
      img: 'https://i.ibb.co/b27wX67/Rectangle-15.png',
      link: 'Sophisticated',
    },
  ];

  return (
    <>
      <div className="container">
        <ShopByMood className="section-padding">
          <SectionTiltle className="section_titile">
            {section_title && <h3 className="font-bold text-black">{section_title}</h3>}
          </SectionTiltle>

          {/* <div className='mood_card_container flex '>
            {bymoodData.map((value, i) => (
              <a className='by_mood_card' key={i}>
                <img src={value.img} />
                <a href='#' className='premium_link bg-milk text-center'>{value.link}</a>
              </a>  
            ))}
          </div> */}

          <div className="mood_card_container ">
          <div className=""> 
            <div className="by_mood_card">
              <div>
                {image_1 && <img src={image_1} />}
              </div>
              {button_text_1 && (
                <div>
                  <a href={button_link_1} className="premium_link bg-milk text-center">
                    {button_text_1}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <div className="by_mood_card">
              <div>
                {image_2 && <img src={image_2} />}
              </div>
              {button_text_2 && (
                <div>
                  <a href={button_link_2} className="premium_link bg-milk text-center">
                    {button_text_2}
                  </a>
                </div>
              )}
            </div>
          </div>
          </div>
        </ShopByMood>
      </div>
    </>
  );
};

const ShopByMood = styled.div``;

export default indexMoodSection;
