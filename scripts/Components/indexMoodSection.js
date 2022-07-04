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

  return (
    <>
      <div className="container">
        <ShopByMood className="section-padding">
          <SectionTiltle className="section_titile">
            {section_title && <h3 className="font-bold text-black">{section_title}</h3>}
          </SectionTiltle>

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
