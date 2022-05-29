import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';
import parse from 'react-html-parser';

const FeaturesSection = ({ productBlock }) => {
  const { settings } = productBlock;
  const {
    features_section_1_title,
    features_section_1_paragraph,
    features_section_1_media_type,
    features_section_1_image,
    features_section_1_video_url,
  } = settings;

  return (
    <>
      <div className="pdp-tabs-sec pt-16 text-sm justify-items-center max-w-screen-xxl font-extralight items-center flex flex-row xl:w-10/12 gap-18">
        <div className="w-5/12">
          {features_section_1_image && features_section_1_media_type === 'image' && (
            <img className="lg:mb-0 md:mb-5" src={features_section_1_image} alt="" />
          )}
          {features_section_1_video_url && features_section_1_media_type === 'video' && (
            <VideoPlayer link={features_section_1_video_url} autoPlay loop />
          )}
        </div>
        <div className="w-7/12">
          {features_section_1_title && (
            <h3 className="mb-4">
              {features_section_1_title}
            </h3>
          )}
          {features_section_1_paragraph && (
            <p className="text-sm md:text-base">{parse(features_section_1_paragraph)}</p>
          )}
        </div>
      </div>
    </>
  );
};

FeaturesSection.defaultProps = {
  productBlock: {},
};

FeaturesSection.propTypes = {
  productBlock: PropTypes.shape({}),
};

export default FeaturesSection;
