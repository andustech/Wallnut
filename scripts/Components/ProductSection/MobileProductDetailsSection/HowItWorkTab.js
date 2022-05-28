import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';
import Tab from '../../Tab';

const HowItWorkTab = ({ productTypeBlock }) => {
  const { settings } = productTypeBlock;
  const {
    howitwork_tab_heading,
    about_paragraph,
    about_desktop_heading,
    about_image,
    about_video_url,
    about_media_type,
  } = settings;

  return (
    <>
      <Tab tabName={howitwork_tab_heading}>
        <div>
          {about_desktop_heading && (
            <h3 className="pb-3 text-base text-blue-light font-serif">{about_desktop_heading}</h3>
          )}
          {about_paragraph && (
            <p className="mb-2 text-sm font-extralight">{about_paragraph}</p>
          )}
          {about_image && about_media_type === 'image' && (
            <img className="mb-5" src={about_image} alt="" />
          )}
          {about_video_url && about_media_type === 'video' && (
            <div className="mb-5">
              <VideoPlayer link={about_video_url} autoPlay loop />
            </div>
          )}
        </div>
      </Tab>
    </>
  );
};

HowItWorkTab.defaultProps = {
  productTypeBlock: {
    settings: {},
  },
};

HowItWorkTab.propTypes = {
  productTypeBlock: PropTypes.shape({}),
};

export default HowItWorkTab;
