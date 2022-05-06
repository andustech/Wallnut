
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import VideoPlayer from '../VideoPlayer';

const ButtonLink = ({ settings }) => {
  const { title, button_text, button_link, subheading, text_color, mobile_text_color } = settings;

  return (
    <ButtonLinkContainer text_color={text_color} mobile_text_color={mobile_text_color}>
      <Title>{title}</Title>
      {subheading !== '' && <Subheading className="">{subheading}</Subheading>}
      <Button href={button_link}>
        <span className="font-normal whitespace-nowrap text-base lg:text-lg  tracking-wider">
          {button_text}
        </span>
      </Button>
    </ButtonLinkContainer>
  );
};

const HeroV3 = ({ settings }) => {
  const { image, video_url, title, subheading, button_text_1, button_link_1, button_text_2, button_link_2 } = settings;
  return (
    <div className="main_banner relative">
      <img src={image} className='bannr_img' alt="Banner" />
      <div className='banner_content'>
        <div className='container'>
          <div className="overlay">
            <h1 className="">{title}</h1>
            <span className="">{subheading}</span>
            <a href={button_link_1} className="primary_btn">{button_text_1}</a>
            <a href={button_link_2} className="secondary_btn">{button_text_2}</a>
          </div>
        </div>
      </div>
    </div>
  );
};






const ButtonLinkContainer = styled.div.attrs(({ text_color, mobile_text_color }) => {
  const className = `w-full my-10 lg:my-0 relative w-9/12 lg:w-6.5/12 lg:absolute flex flex-col lg:h-full items-center lg:justify-center justify-items-center lg:right-0 px-6 md:px-36 lg:px-26 text-${mobile_text_color} lg:text-${text_color}`;
  return { className };
})``;

const Title = styled.div.attrs({
  className: 'text-4xl md:text-5xl whitespace-nowrap lg:text-5.5xl center',
})``;

const Subheading = styled.div.attrs({
  className: 'font-serif mt-4 md:mt-1 lg:mt-5 text-xl text-center',
})`
  max-width: 360px;
`;

const Button = styled.a.attrs({
  className:
    'bg-brown font-normal mt-6 md:mt-6 px-12 py-2 rounded-full text-lg uppercase center pointer text-white hover:bg-orange-burnt hover:text-white hover:no-underline border-2 border-orange-burnt ',
})``;

HeroV3.defaultProps = {
  settings: {
    content: '',
  },
};

ButtonLink.defaultProps = {
  settings: {
    title: '',
    subheading: '',
    button_text: '',
    button_link: '',
    text_color: 'blue',
  },
};

HeroV3.propTypes = {
  settings: PropTypes.shape({
    image: PropTypes.string.isRequired,
    video_url: PropTypes.string.isRequired,
    mobile_image: PropTypes.string.isRequired,
    image_left: PropTypes.string.isRequired,
    tablet_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button_text: PropTypes.string.isRequired,
    button_link: PropTypes.string.isRequired,
  }),
};

ButtonLink.propTypes = {
  settings: PropTypes.shape({
    title: PropTypes.string,
    subheading: PropTypes.string,
    button_text: PropTypes.string,
    button_link: PropTypes.string,
    text_color: PropTypes.string,
    mobile_text_color: PropTypes.string.isRequired,
  }),
};

export default HeroV3;