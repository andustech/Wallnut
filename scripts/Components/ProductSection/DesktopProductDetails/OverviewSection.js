import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';
import VideoPlayIcon from '../../Icons/VideoPlayIcon';

const OverviewSection = ({ productBlock }) => {
  const [videoActive, setVideoActive] = useState('fade-out');
  const { settings } = productBlock;
  const {
    about_desktop_heading,
    about_paragraph,
    about_image,
    about_video_title,
    about_video_url,
  } = settings;

  const handleVideoPopup = () => {
    if (videoActive === 'fade-out') {
      setVideoActive('fade-in');
      $('.pdp-tabs-sec video')[0].play();
      $('.pdp-tabs-sec .close-button').addClass('md:hidden');
    } else {
      setVideoActive('fade-out');
      $('.pdp-tabs-sec video')[0].pause();
    }
  };

  $('.pdp-tabs-sec .videoBack .modal-body').mouseenter(function () {
    $('.pdp-tabs-sec video').attr('controls', true);
    $('.pdp-tabs-sec .close-button').removeClass('md:hidden');
  });
  $('.pdp-tabs-sec .videoBack .modal-body').mouseleave(function () {
    $('.pdp-tabs-sec video').removeAttr('controls');
    $('.pdp-tabs-sec .close-button').addClass('md:hidden');
  });

  $(document).on('click', function (e) {
    if (
      !(
        $(e.target).closest('.video-pop-link').length > 0 ||
        $(e.target).closest('.videoBack .modal-body').length > 0
      )
    ) {
      setVideoActive('fade-out');
      if ($('.pdp-tabs-sec video').length > 0) {
        $('.pdp-tabs-sec video')[0].pause();
      }
    }
  });

  return (
    <div className="pdp-tabs-sec pt-16 text-sm justify-items-center max-w-screen-xxl font-extralight items-center flex flex-row xl:w-10/12 gap-18">
      <div className="w-7/12">
        {about_image && (
          <img className="lg:mb-0 md:mb-5" src={about_image} alt="" />
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
        {about_video_url && (
          <>
          <div className="flex items-center cursor-pointer video-pop-link mt-6 uppercase text-xs leading-5 video-open-link" onClick={() => handleVideoPopup()} style={{ letterSpacing: '.05em'}} ><VideoPlayIcon/>{about_video_title}</div>
          <div tabIndex="-1" aria-hidden="true" className={`videoBack fixed ${videoActive}`}>
            <div className="flex items-start modal-body pr-4 w-11/12 md:w-2/3">
              <VideoPlayer link={about_video_url} loop width="100%" height="100%" controls/>
              <button
                type="button"
                className="pl-3 close-button bg-transparent hover:text-gray-900 items-center ml-auto rounded-lg text-gray-400 text-sm"
                onClick={() => handleVideoPopup()}
              >
                <svg
                  className="w-5 h-5"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          </>
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
