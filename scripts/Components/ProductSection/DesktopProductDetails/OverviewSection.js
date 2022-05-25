import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';

const OverviewSection = ({ productBlock }) => {
  const { settings } = productBlock;
  const {
    howitwork_tab_heading,
    about_paragraph,
    about_media_type,
    about_image,
    about_video_url,
  } = settings;

  return (
    <div className="mx-auto lg:col-span-2 lg:grid lg:grid-cols-2 gap-5 max-w-screen-xxl">
      <div className="pb-5 border-grey-50 border-b border-solid lg:px-10 md:border-none">
        <div>
          {about_image && about_media_type === 'image' && <img src={about_image} alt="" />}
          {about_video_url && about_media_type === 'video' && (
            <VideoPlayer link={about_video_url} autoPlay loop />
          )}
        </div>
      </div>
      <div className="lg:mt-15 md:mt-0 md:w-98 mt-5 mx-auto">
        <div className="font-serif text-xl font-light mt-3">{howitwork_tab_heading}</div>
        <p className="text-base font-extralight mt-3 mb-5">{about_paragraph}</p>
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
