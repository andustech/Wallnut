import React, { useState } from 'react';
import parse from 'react-html-parser';

const meetWallnut = ({ settings, blocks }) => {
  const { section_title, main_content } = settings;
  const [videoActive, setVideoActive] = useState('fade-out');

  const handleVideoPopup = () => {
    if (videoActive === 'fade-out') {
      setVideoActive('fade-in');
      $('.video_items_container video')[0].play();
      // $('video').removeAttr('controls');
      $('.video_items_container .close-button').addClass('md:hidden');
    } else {
      setVideoActive('fade-out');
      $('.video_items_container video')[0].pause();
      // $('video').attr('controls', true);
      // $('.close-button').removeClass('md:hidden');
    }
  };

  $('.video_items_container .modal-body').mouseenter(function () {
    $('.video_items_container video').attr('controls', true);
    $('.video_items_container .close-button').removeClass('md:hidden');
  });
  $('.video_items_container .modal-body').mouseleave(function () {
    $('.video_items_container video').removeAttr('controls');
    $('.video_items_container .close-button').addClass('md:hidden');
  });

  $(document).on('click', function (e) {
    if (
      !(
        $(e.target).closest('.video-open').length > 0 ||
        $(e.target).closest('.videoBack .modal-body').length > 0
      )
    ) {
      setVideoActive('fade-out');
      $('.video_items_container video')[0].pause();
    }
  });
  return (
    <div className="section-padding text-black">
      <div className="container text-center mb-14">
        {section_title && <h3 className="mb-2 sec-title font-bold text-black">{section_title}</h3> }
        { main_content && <p className="mb-0">{main_content}</p> }
      </div>

      <div className="bg-milk container lg:bg-transparent py-8 lg:py-0">
          {blocks.map((block, index)=>{
            const {settings} = block;
            return (
              <>
              {index % 2 === 0 ? (
                <div className="video_items_container mb-10 lg:mb-16 flex flex-col lg:flex-row items-center lg:items-center md:items-start">
                  <div className="lg:w-7/12 mb-4 lg:mb-0">
                    <img
                      src={settings.image}
                      alt="how-it-works"
                      className="w-full"
                    />
                  </div>
                  <div className="video_content lg:w-5/12 lg:pl-16 xl:pl-24">
                    { settings.title && <h4 className="font-bold text-black mb-4">{settings.title}</h4> }
                    { settings.content && <p className="mb-4 test">{parse(settings.content)}</p> }
                    <p>{settings.content_r}</p>
                    <ul className="text-base pl-5 mb-7 list-disc">
                      { settings.point_content_1 && 
                        <li>
                          <p className="mb-3">
                            <span className="font-bold">{settings.point_title_1}</span> {settings.point_content_1}
                          </p>
                        </li>
                      }
                      { settings.point_content_2 && 
                        <li>
                          <p className="mb-0">
                            <span className="font-bold">{settings.point_title_2}</span> {settings.point_content_2}
                          </p>
                        </li>
                      }
                    </ul>
                    { settings.video_btn_text && 
                      <>
                          <a href={undefined} onClick={() => handleVideoPopup()} className="video-open text-xs flex items-center mb-6 text-black leading-5 video-open-link cursor-pointer">
                              <img 
                                  src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play-black.svg?v=1652851742" 
                                  alt="Video Play" 
                                  className="mr-3"
                              />
                              {settings.video_btn_text}
                          </a>
                      </>
                    }
                    { settings.subtext && 
                      <p className="font-normal text-xs leading-5 mb-0">{settings.subtext}</p>
                    }
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

              ):(
                <div className="how_it_work_items_container flex flex-col-reverse lg:flex-row items-center lg:items-center md:items-start">
                  <div className="lg:w-5/12 lg:pr-16 xl:pr-24">
                    { settings.title && <h4 className="font-bold text-black mb-4">{settings.title}</h4> }
                    { settings.content && <p className="mb-6">{settings.content}</p> }
                    { settings.button_text && <a href={settings.button_link} className="primary_btn mr-0">{settings.button_text}</a> }
                    { settings.subtext && 
                      <p className="font-normal text-xs leading-5 mb-0">{settings.subtext}</p>
                    }
                  </div>
                  <div className="lg:w-7/12 mb-4 lg:mb-0">
                    <img
                      src={settings.image}
                      alt="how-it-works"
                      className="w-full"
                    />
                  </div>
                </div>
              )}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default meetWallnut;
