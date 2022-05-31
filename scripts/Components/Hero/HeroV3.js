
import React from 'react';
import styled from 'styled-components';
// import VideoPlayer from '../VideoPlayer';

const HeroV3 = ({ settings }) => {
  const { image, video_url, title, subheading, button_text_1, button_link_1, button_text_2, button_link_2 } = settings;
  return (
    <div className="main_banner relative" style={{backgroundImage: 'url('+image+')', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
      <img src={image} className='bannr_img' alt="Banner" />
      <div className='banner_content'>
        <div className='container'>
          <div className="overlay">
            { title && <h1 className="mb-1 text-white">{title}</h1> }
            { subheading && <span className="h1-attila-sans text-white block">{subheading}</span> }
            { button_text_1 && <a href={button_link_1} className="primary_btn mr-3 lg:mr-6">{button_text_1}</a> }
            { button_text_2 && <a href={button_link_2} className="secondary_btn">{button_text_2}</a> }
          </div>
        </div>
      </div>
    </div> 
  );
};

export default HeroV3;