import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IndexBetterWay = ({ blocks }) => {
  const [videoActive, setVideoActive] = useState('fade-out');

  const handleVideoPopup = () => {
    // console.log('click', videoActive)
    if (videoActive === 'fade-out') {
      setVideoActive('fade-in');
      console.log('if');
      $('video')[0].play();
      // $('video').removeAttr('controls');
      $('.close-button').addClass('md:hidden');
    } else {
      console.log('else');
      setVideoActive('fade-out');
      $('video')[0].pause();
      // $('video').attr('controls', true);
      // $('.close-button').removeClass('md:hidden');
    }
  };

  $('.video_items_container .modal-body').mouseenter(function () {
    $('video').attr('controls', true);
    $('.close-button').removeClass('md:hidden');
  });
  $('.video_items_container .modal-body').mouseleave(function () {
    $('video').removeAttr('controls');
    $('.close-button').addClass('md:hidden');
  });

  $(document).on('click', function (e) {
    if (
      !(
        $(e.target).closest('.video-open').length > 0 ||
        $(e.target).closest('.videoBack .modal-body').length > 0
      )
    ) {
      setVideoActive('fade-out');
      $('video')[0].pause();
    }
  });

  return (
    <div className="section-padding">
      <div className="bg-deep-moss py-8 md:py-16 text-white">
        <div className="container mx-auto md:py-2">
          {blocks.map((block, index) => {
            const { settings } = block;
            return (
              <div key={`bw-` + index}>
                {index % 2 === 0 ? (
                  <div className="video_items_container flex items-center flex-col-reverse md:flex-row mb-14 md:mb-0">
                    <div className="video_content w-full md:w-6/12 md:pr-5 lg:px-13 xl:px-16 pt-6 md:pt-0 pb-0 md:pb-5 lg:pb-0">
                      {settings.title && (
                        <h2 className="font-bold text-white mb-4">{settings.title}</h2>
                      )}
                      {settings.content && <p className="mb-6 md:mb-7">{settings.content}</p>}
                      {settings.video_btn_text && (
                        <>
                          <a
                            onClick={() => handleVideoPopup()}
                            href="javascript:void(0);"
                            className="video-open text-white flex items-center link_hover"
                          >
                            <img
                              src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play.svg?v=1651814299"
                              alt="Video Play"
                              className="mr-3"
                            />
                            {settings.video_btn_text}
                          </a>
                        </>
                      )}
                      <div className="flex items-center">
                        {settings.button_text && (
                          <a href={settings.button_link} className="primary_btn">
                            {settings.button_text}
                          </a>
                        )}
                        {settings.link_text && (
                          <a
                            href={settings.link_url}
                            className="text-white hover:text-red-100 flex items-center"
                          >
                            {settings.link_icon_position == 'before' && (
                              <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                            )}
                            {settings.link_text}
                            {settings.link_icon_position == 'after' && (
                              <img src={settings.link_icon} alt="Video Play" className="ml-6" />
                            )}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="w-full md:w-6/12">
                      <img src={settings.image} alt="how-it-works" className="w-full" />
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
                            <source src={settings.video_link} type="video/mp4" />
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
                ) : (
                  <div className="how_it_work_items_container flex items-center flex-col md:flex-row">
                    <div className="w-full md:w-6/12">
                      <img src={settings.image} alt="how-it-works" className="w-full" />
                    </div>
                    <div className="how_it_work_content w-full md:w-6/12 md:pl-5 lg:px-13 xl:px-16 pt-6 md:pt-0">
                      {settings.title && (
                        <h2 className="font-bold text-white mb-4">{settings.title}</h2>
                      )}
                      {settings.content && <p className="mb-6 md:mb-7">{settings.content}</p>}
                      <div className="flex items-center flex-row">
                        {settings.button_text && (
                          <a href={settings.button_link} className="primary_btn mr-6 sm:mr-10">
                            {settings.button_text}
                          </a>
                        )}
                        {settings.link_text && (
                          // <a href={settings.link_url} className="text-white hover:text-red-100 flex items-center">
                          //   {settings.link_icon_position == 'before' &&
                          //     <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                          //   }
                          //   {settings.link_text}
                          //   {settings.link_icon_position == 'after' &&
                          //     <img src={settings.link_icon} alt="Video Play" className="ml-6" />
                          //   }
                          // </a>

                          <a
                            href={settings.link_url}
                            className="premium_link white_link relative link_hover"
                          >
                            {settings.link_text}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexBetterWay;
