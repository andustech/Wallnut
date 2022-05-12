import React from 'react';
import PropTypes from 'prop-types';

const IndexBetterWay = ({ blocks }) => {
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
                    {settings.button_text &&
                      <a href={settings.button_link} className="primary_btn">{settings.button_text}</a>
                    }
                    {settings.link_text &&
                      <a href={settings.link_url} className="text-white hover:text-red-100">
                        {settings.link_icon_position == 'before' &&
                          <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                        }
                        {settings.link_text}
                        {settings.link_icon_position == 'after' &&
                          <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                        }
                      </a>
                    }
                  </div>
                  <div className="w-6/12">
                    <img src={settings.image} alt="how-it-works" />
                  </div>
                </div>
              ):(
                <div className="how_it_work_items_container flex items-center flex-col lg:flex-row">
                  <div className="w-6/12">
                    <img src={settings.image} alt="how-it-works" />
                  </div>
                  <div className="how_it_work_content lg:w-6/12 lg:px-16 pt-5 lg:pt-5">
                    {settings.title &&
                      <h2 className="h2-nib-pro text-5xl font-bold text-white mb-4">{settings.title}</h2>
                    }
                    {settings.content &&
                      <p className="mb-7">{settings.content}</p>
                    }
                    {settings.button_text &&
                      <a href={settings.button_link} className="primary_btn">{settings.button_text}</a>
                    }
                    {settings.link_text &&
                      <a href={settings.link_url} className="text-white hover:text-red-100">
                        {settings.link_icon_position == 'before' &&
                          <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                        }
                        {settings.link_text}
                        {settings.link_icon_position == 'after' &&
                          <img src={settings.link_icon} alt="Video Play" className="mr-3" />
                        }
                      </a>
                    }
                  </div>
                </div>
              )}
              </>
            )
        })}
        
      </div>

      <div tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed left-1/2 top-1/2 translate-y-2/4 z-50">
        <div class="flex items-start modal-body pr-4">
          <video width="100%" height="100%" controls autoplay class="pr-3">
            <source src="https://cdn.shopify.com/s/files/1/1564/7647/files/monthly_packages.mp4?v=1614849415" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button type="button" className="bg-transparent hover:text-gray-900 items-center ml-auto rounded-lg text-gray-400 text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>

    </div>
  );
};

export default IndexBetterWay;
