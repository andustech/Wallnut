import React from 'react';

const howItWorks = ({ settings }) => {
  const { image, title, subheading, content, button_text_1, button_link_1, button_text_2, button_link_2 } = settings;
  return (
    <>
        <section>
          <div id="react-hero">
            <div className="main_banner relative">
              <img
                src={image}
                className="bannr_img"
                alt="Banner"
              />
              <div className="banner_content">
                <div className="container">
                  <div className="how_it_work_hero_overlay text-white">
                    { title && <h1 className="text-white mb-1 h2">{title}</h1> }
                    { subheading && <h2 className="text-white mb-4 h2-attila-sans">{subheading}</h2> }
                    { content && <p className="mb-8">{content}</p> }
                    { button_text_1 && <a href={button_link_1} className="primary_btn">{button_text_1}</a> }
                    { button_text_2 && <a href={button_link_2} className="secondary_btn">{button_text_2}</a> }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default howItWorks;
