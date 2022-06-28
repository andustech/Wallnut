import React from 'react';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';

const instructionsVideos = ({ settings, blocks }) => {
  const { heading } = settings;
  return (
    <>
        <section className='border-b md:mb-6 mb-4'>
            <p className="h3-attila-sans font-medium md:mb-5 mb-3">{heading}</p>
            {blocks?.map((block, index)=>{
                const {settings} = block;
                return (
                    <>
                    <VideoWrap key={index.toString()}>
                      {settings.video_heading && (
                        <VideoTitle>{settings.video_heading}</VideoTitle>
                      )}
                      {settings.video_link && (
                        <VideoPlayer link={settings.video_link} controls loop />
                      )}
                    </VideoWrap>
                    </>
                )
            })}
        </section>
    </>
  );
};

export default instructionsVideos;

const VideoWrap = styled.div.attrs({
  className: 'md:mb-10 mb-5',
})``;

const VideoTitle = styled.p.attrs({
  className: 'md:mb-5 mb-3',
})`
  font-family: 'GoodSans-Light' !important;
  font-size: 20px !important;
  line-height: 26px !important;
  @media only screen and (max-width: 991px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
  @media only screen and (max-width: 767px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`;