import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IndexBetterWay = ({ blocks }) => {
  const [videoActive, setVideoActive] = useState('fade-out');

  const handleVideoPopup = () => {
    // console.log('click', videoActive)
    if(videoActive === 'fade-out') {
      setVideoActive('fade-in');
    } else {
      setVideoActive('fade-out');
    }
  };
  
  return (
    <div className="bg-deep-moss py-16 text-white">
      <div className="container mx-auto py-2 px-5 lg:px-0">
      
        {blocks.map((block, index)=>{
            const {settings} = block;
            return (
              <>
              {index % 2 === 0 ? (
                <div className="video_items_container flex items-center flex-col lg:flex-row">
                  <div className="video_content lg:w-6/12 lg:px-16 pb-5 lg:pb-5">
                    {settings.title &&
                      <h2 className="h2-nib-pro text-5xl font-bold text-white mb-4">{settings.title}</h2>
                    }
                    {settings.content &&
                      <p className="mb-7">{settings.content}</p>
                    }
                    {settings.video_btn_text &&
                      <>
                      <a onClick={() => handleVideoPopup()} href="javascript:void(0);" className="text-white hover:text-red-100 flex items-center">
                      <img src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play.svg?v=1651814299" alt="Video Play" className="mr-3" />
                      {settings.video_btn_text}
                      </a>
                      </>
                    }
                    <div class="flex items-center">
                    {settings.button_text &&
                      <a href={settings.button_link} className="primary_btn">{settings.button_text}</a>
                    }
                    {settings.link_text &&
                      <a href={settings.link_url} className="text-white hover:text-red-100 flex items-center">
                        {settings.link_icon_position == 'before' &&
                          <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                        }
                        {settings.link_text}
                        {settings.link_icon_position == 'after' &&
                          <img src={settings.link_icon} alt="Video Play" className="ml-6" />
                        }
                      </a>
                    }
                    </div>
                  </div>
                  <div className="w-6/12"> 
                    <img src={settings.image} alt="how-it-works" class="w-full" />
                  </div>
                  {settings.video_link &&
                    <div tabindex="-1" aria-hidden="true" className={`videoBack fixed ${videoActive}`}>
                      <div class="flex items-start modal-body pr-4">
                        <video width="700px" height="500px" controls autoplay class="pr-3">
                          <source src={settings.video_link} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button type="button" className="bg-transparent hover:text-gray-900 items-center ml-auto rounded-lg text-gray-400 text-sm" onClick={() => handleVideoPopup()}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                      </div>
                    </div>
                  }

                </div>
              ):(
                <div className="how_it_work_items_container flex items-center flex-col lg:flex-row">
                  <div className="w-6/12">
                    <img src={settings.image} alt="how-it-works" class="w-full" />
                  </div>
                  <div className="how_it_work_content lg:w-6/12 lg:px-16 pt-5 lg:pt-5">
                    {settings.title &&
                      <h2 className="h2-nib-pro text-5xl font-bold text-white mb-4">{settings.title}</h2>
                    }
                    {settings.content &&
                      <p className="mb-7">{settings.content}</p>
                    }
                    <div class="flex flex-col items-center sm:flex-row">
                    {settings.button_text &&
                      <a href={settings.button_link} className="primary_btn mb-4 sm:mb-0">{settings.button_text}</a>
                    }
                    {settings.link_text &&
                      <a href={settings.link_url} className="text-white hover:text-red-100 flex items-center">
                        {settings.link_icon_position == 'before' &&
                          <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                        }
                        {settings.link_text}
                        {settings.link_icon_position == 'after' &&
                          <img src={settings.link_icon} alt="Video Play" className="ml-6" />
                        }
                      </a>
                    }
                    </div>
                  </div>
                </div>
              )}
              </>
            )
        })}
        
      </div>

    </div>
  );
};

export default IndexBetterWay;
