import React, { useState } from 'react';

const howItWorksVideo = ({ settings }) => {
  const { image, title, content, video_btn_text, video_link } = settings;
  const [videoActive, setVideoActive] = useState('fade-out');

  const handleVideoPopup = () => {
    if (videoActive === 'fade-out') {
      setVideoActive('fade-in');
      $('.video_container video')[0].play();
      // $('video').removeAttr('controls');
      $('.close-button').addClass('md:hidden');
    } else {
      setVideoActive('fade-out');
      $('.video_container video')[0].pause();
      // $('video').attr('controls', true);
      // $('.close-button').removeClass('md:hidden');
    }
  };

  $('.video_container .modal-body').mouseenter(function () {
    $('.video_container video').attr('controls', true);
    $('.video_container .close-button').removeClass('md:hidden');
  });
  $('.video_container .modal-body').mouseleave(function () {
    $('.video_container video').removeAttr('controls');
    $('.video_container .close-button').addClass('md:hidden');
  });

  $(document).on('click', function (e) {
    if (
      !(
        $(e.target).closest('.video-open').length > 0 ||
        $(e.target).closest('.videoBack .modal-body').length > 0
      )
    ) {
      setVideoActive('fade-out');
      $('.video_container video')[0].pause();
    }
  });

  return (
    <div className="section-padding">
       <div className="main_banner relative video_container">
        <div className="container">
          <div className="bg-morning-blue w-full">
            <div className="meet_wallnut_overlay text-black lg:text-white lg:w-3/12 text-center py-8 lg:py-0">
                { title && <h3 className="mb-2 text-black lg:text-white">{title}</h3> }
                { content && <p className="mb-6">{content}</p> }
                { video_btn_text && 
                    <>
                        <a href={undefined} onClick={() => handleVideoPopup()} className="video-open text-white flex items-center link_hover hidden lg:block cursor-pointer">
                            <img 
                                src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play.svg?v=1651814299" 
                                alt="Video Play" 
                                className="mr-3"
                            />
                            {video_btn_text}
                        </a>
                        <a href={undefined} onClick={() => handleVideoPopup()} className="video-open text-black flex items-center link_hover lg:hidden cursor-pointer">
                            <img 
                                src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play-black.svg?v=1652851742" 
                                alt="Video Play" 
                                className="mr-3"
                            />
                            {video_btn_text}
                        </a>
                    </>
                }
            </div>
          </div>
            <img
            src={image}
            className="bannr_img"
            alt="Banner"
            />
        </div>
        {settings.video_link && (
            <div
            tabIndex="-1"
            aria-hidden="true"
            className={`videoBack fixed ${videoActive}`}
            >
            <div className="flex items-start modal-body pr-4 w-11/12 md:w-2/3">
                <video
                width="100%"
                height="100%"
                controls
                allow={'autoplay'}
                className="pr-3"
                >
                <source src={video_link} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <button
                type="button"
                className="close-button bg-transparent hover:text-gray-900 items-center ml-auto rounded-lg text-gray-400 text-sm"
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
        )}
      </div>
    </div>
  );
};

export default howItWorksVideo;
