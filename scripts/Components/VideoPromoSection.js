import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const VideoPromoSection = ({ settings }) => {
  const { image, section_title, title, subheading, button_text, button_link } = settings;

  return (
    <>
      <WhiteCollectionContainer className='container white_main_container section-padding'>
        <div className='white_coll_left'>
          <img src={image} alt="Collection" />
        </div> 
        <div className='white_coll_right'>
          <div className='item_box'>
            { section_title && <div className='title_top uppercase'>{section_title}</div> }
          
            <MiddContent>
              { title && <h2 className="font-bold">{title}</h2> }
              { subheading && <p>{subheading}</p> }
              { button_text && <a className='premium_link bg-milk' href={button_link}>{button_text}</a> }
            </MiddContent>
          </div>
        </div>
      </WhiteCollectionContainer>
    </>
  )

};



const WhiteCollectionContainer = styled.div`
`;

const MiddContent = styled.div`
  a:after {
  // content: '';
  // width: 17px;
  // height: 10px;
  // right: 30px;
  // top: 18px;
  // position: absolute;
  // background-image: url('https://i.ibb.co/mhJXcrZ/Vector.png');
}
`;

export default VideoPromoSection;
