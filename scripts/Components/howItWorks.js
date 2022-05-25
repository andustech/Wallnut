import React from 'react';

const howItWorks = ({ settings }) => {
  const { image, title, subheading, content, button_text_1, button_link_1, button_text_2, button_link_2 } = settings;
  return (
    <>
      <div id="shopify-section-162430614931fcd803" class="shopify-section">
        <section>
          <div id="react-hero">
            <div class="main_banner relative">
              <img
                src={image}
                class="bannr_img"
                alt="Banner"
              />
              <div class="banner_content">
                <div class="container">
                  <div class="how_it_work_hero_overlay text-white">
                    { title && <h1 class="text-white mb-1">{title}</h1> }
                    { subheading && <h2 class="text-white mb-4">{subheading}</h2> }
                    { content && <p className="mb-8">{content}</p> }
                    { button_text_1 && <a href={button_link_1} class="primary_btn">{button_text_1}</a> }
                    { button_text_2 && <a href={button_link_2} class="secondary_btn">{button_text_2}</a> }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default howItWorks;
