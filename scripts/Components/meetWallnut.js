import React from 'react';

const meetWallnut = ({ settings, blocks }) => {
  const { section_title, main_content } = settings;
  return (
    <div className="section-padding text-black">
      <div className="container text-center mb-14">
        {section_title && <h2 className="text-4xl mb-2 sec-title font-bold">{section_title}</h2> }
        { main_content && <p className="font-normal text-base mb-0 leading-6">{main_content}</p> }
      </div>

      <div className="container">
          {blocks.map((block, index)=>{
            const {settings} = block;
            return (
              <>
              {index % 2 === 0 ? (
                <div className="video_items_container mb-16 flex flex-col lg:flex-row items-center lg:items-center md:items-start">
                  <div className="lg:w-7/12">
                    <img
                      src={settings.image}
                      alt="how-it-works"
                      className="w-full"
                    />
                  </div>
                  <div className="video_content lg:w-5/12 lg:pl-16 xl:pl-24">
                    { settings.title && <h2 className="text-2xl font-bold text-black mb-4">{settings.title}</h2> }
                    { settings.content && <p className="font-normal mb-4 text-base leading-6">{settings.content}</p> }
                    <ul className="text-base pl-5 mb-7 list-disc">
                      { settings.point_content_1 && 
                        <li>
                          <p className="font-normal text-base mb-3 leading-6">
                            <span className="font-bold">{settings.point_title_1}</span> {settings.point_content_1}
                          </p>
                        </li>
                      }
                      { settings.point_content_2 && 
                        <li>
                          <p className="font-normal text-base mb-0 leading-6">
                            <span className="font-bold">{settings.point_title_2}</span> {settings.point_content_2}
                          </p>
                        </li>
                      }
                    </ul>
                    { settings.video_btn_text && 
                      <a
                        href="javascript:void(0);"
                        className="text-xs flex items-center mb-6 text-black leading-5 link_hover"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play-black.svg?v=1652851742"
                          alt="Video Play"
                          className="mr-3"
                        />{' '}
                        {settings.video_btn_text}
                      </a>
                    }
                    { settings.subtext && 
                      <p className="font-normal text-xs leading-5 mb-0">{settings.subtext}</p>
                    }
                  </div>
                </div>

              ):(
                <div className="how_it_work_items_container flex flex-col lg:flex-row items-center lg:items-center md:items-start">
                  <div className="lg:w-5/12 lg:pr-16 xl:pr-24">
                    { settings.title && <h2 className="text-2xl font-bold text-black mb-4">{settings.title}</h2> }
                    { settings.content && <p className="mb-6 font-normal text-base leading-6">{settings.content}</p> }
                    { settings.button_text && <a href={settings.button_link} className="primary_btn mr-0">{settings.button_text}</a> }
                    { settings.subtext && 
                      <p className="font-normal text-xs leading-5 mb-0">{settings.subtext}</p>
                    }
                  </div>
                  <div className="lg:w-7/12">
                    <img
                      src={settings.image}
                      alt="how-it-works"
                      className="w-full"
                    />
                  </div>
                </div>
              )}
              </>
              )
          })}
      </div>
      <div className="main_banner mt-28 relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/meet-wallnut-3.jpg?v=1652355498"
          className="bannr_img"
          alt="Banner"
        />
        <div className="banner_content">
          <div className="container w-full">
            <div className="meet_wallnut_overlay text-white">
              <h1 className="mb-1 text-white">How it works</h1>
              <p>Sound too good to be true? This video explains everything.</p>
              <a href="#" className="flex items-center mb-8 lg:mb-2 text-white hover:text-red-100">
                <img
                  src="https://i.ibb.co/PFvTSLq/video-play.png"
                  alt="Video Play"
                  className="mr-3"
                />{' '}
                WATCH THE VIDEO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default meetWallnut;
