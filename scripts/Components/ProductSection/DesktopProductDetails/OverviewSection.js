import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';

const OverviewSection = ({ productBlock }) => {
  const { settings } = productBlock;
  const {
    about_desktop_heading,
    about_paragraph,
    about_media_type,
    about_image,
    about_video_url,
  } = settings;

  return (
    <div className="pdp-tabs-sec pt-16 text-sm justify-items-center max-w-screen-xxl font-extralight items-center flex flex-row xl:w-10/12 gap-18">
      <div className="w-7/12">
        {about_image && about_media_type === 'image' && (
          <img className="lg:mb-0 md:mb-5" src={about_image} alt="" />
        )}
        {about_video_url && about_media_type === 'video' && (
          <VideoPlayer link={about_video_url} autoPlay loop />
        )}
      </div>
      <div className="w-5/12">
        {about_desktop_heading && (
          <h3 className="mb-4">
            {about_desktop_heading}
          </h3>
        )}
        {about_paragraph && (
          <p className="mb-2 text-sm font-extralight md:text-base">{about_paragraph}</p>
        )}
      </div>
    </div>
  );
};

OverviewSection.defaultProps = {
  productBlock: {},
};

OverviewSection.propTypes = {
  productBlock: PropTypes.shape({
    settings: PropTypes.shape({
      howitwork_tab_heading: PropTypes.string,
      about_paragraph: PropTypes.string,
      about_image: PropTypes.string,
      about_video_url: PropTypes.string,
      about_media_type: PropTypes.string,
      product: PropTypes.string,
    }),
  }),
};

export default OverviewSection;
