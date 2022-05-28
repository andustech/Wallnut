import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';
import Tab from '../../Tab';

const FeaturesTab = ({ productTypeBlock }) => {
  const { settings } = productTypeBlock;
  const {
    whylove_tab_heading,
    features_section_1_title,
    features_section_1_paragraph,
    features_section_1_media_type,
    features_section_1_image,
    features_section_1_video_url,
  } = settings;

  return (
    <>
      <Tab tabName={whylove_tab_heading}>
        <div>
          {features_section_1_title && (
            <h3 className="pb-3 text-base text-blue-light font-serif">{features_section_1_title}</h3>
          )}
          {features_section_1_paragraph && (
            <p className="mb-2 text-sm font-extralight">{features_section_1_paragraph}</p>
          )}
          {features_section_1_image && features_section_1_media_type === 'image' && (
            <img className="mb-5" src={features_section_1_image} alt="" />
          )}
          {features_section_1_video_url && features_section_1_media_type === 'video' && (
            <div className="mb-5">
              <VideoPlayer link={features_section_1_video_url} autoPlay loop />
            </div>
          )}
        </div>
      </Tab>
    </>
  );
};

FeaturesTab.defaultProps = {
  productTypeBlock: {
    settings: {},
  },
};

FeaturesTab.propTypes = {
  productTypeBlock: PropTypes.shape({}),
};

export default FeaturesTab;
