import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';
import Tab from '../../Tab';
import VideoPlayIcon from '../../Icons/VideoPlayIcon';

const HowItWorkTab = ({ productTypeBlock }) => {
  const [videoActive, setVideoActive] = useState('fade-out');
  const { settings } = productTypeBlock;
  const {
    howitwork_tab_heading,
    about_desktop_heading,
    about_paragraph,
    about_image,
    about_video_title,
    about_video_url,
  } = settings;

  const handleVideoPopup = () => {
    if (videoActive === 'fade-out') {
      setVideoActive('fade-in');
      $('.mobile-pdp-tabs .videoBack video')[0].play();
      $('.mobile-pdp-tabs .close-button').addClass('md:hidden');
    } else {
      setVideoActive('fade-out');
      $('.mobile-pdp-tabs .videoBack video')[0].pause();
    }
  };

  $('.mobile-pdp-tabs .videoBack .modal-body').mouseenter(function () {
    $('.mobile-pdp-tabs .videoBack video').attr('controls', true);
    $('.mobile-pdp-tabs .close-button').removeClass('md:hidden');
  });
  $('.mobile-pdp-tabs .videoBack .modal-body').mouseleave(function () {
    $('.mobile-pdp-tabs .videoBack video').removeAttr('controls');
    $('.mobile-pdp-tabs .close-button').addClass('md:hidden');
  });

  $(document).on('click', function (e) {
    if (
      !(
        $(e.target).closest('.video-pop-link').length > 0 ||
        $(e.target).closest('.videoBack .modal-body').length > 0
      )
    ) {
      setVideoActive('fade-out');
      if ($('.mobile-pdp-tabs video').length > 0) {
        $('.mobile-pdp-tabs .videoBack video')[0].pause();
      }
    }
  });

  return (
    <>
      <Tab tabName={howitwork_tab_heading}>
        <div>
          {about_image && (
            <>
              <div className="mb-6">
                <VideoPlayer link={about_image} loop width="100%" height="100%" autoPlay muted/>
              </div>
            </>
          )}
          {about_desktop_heading && (
            <h3>{about_desktop_heading}</h3>
          )}
          {about_paragraph && (
            <p>{about_paragraph}</p>
          )}
          {about_video_url && (
            <>
            <div className="flex items-center cursor-pointer video-pop-link mt-5 uppercase text-xs leading-5 video-open-link" style={{ letterSpacing: '.05em'}} onClick={() => handleVideoPopup()} ><VideoPlayIcon/>{about_video_title}</div>
            <div tabIndex="-1" aria-hidden="true" className={`videoBack fixed ${videoActive}`}>
              <div className="flex items-start modal-body pr-4 w-11/12 md:w-2/3">
                <VideoPlayer link={about_video_url} autoPlay loop width="100%" height="100%" controls/>
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
