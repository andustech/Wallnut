import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const indexTestimonialSection = ({ settings, blocks }) => {
  const { title, content } = settings;

  return (
    <>
      <div className="review_main_container section-padding">
        <div className="container">
          <div className="review_inner_items">
            <div className="left">
              {title && <h2 className="h4-attila-sans text-black">{title}</h2>}
              {content && <p>{content}</p>}
            </div>
            <div className="right gap-7 ml-11">
              {blocks.map((block, index) => {
                const { settings } = block;
                let rating_img;
                if (settings.rating == '1')
                  rating_img =
                    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/1-star.svg?v=1652253480';
                else if (settings.rating == '2')
                  rating_img =
                    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/2-star.svg?v=1652253480';
                else if (settings.rating == '3')
                  rating_img =
                    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/3-star.svg?v=1652253480';
                else if (settings.rating == '4')
                  rating_img =
                    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/4-star.svg?v=1652253480';
                else
                  rating_img =
                    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/5-star.svg?v=1652253480';
                return (
                  <div className="review_card" key={`t-` + index}>
                    <div className="img">
                      <img src={settings.image} alt="Testimonial" />
                    </div>
                    <div className="rating_start">
                      <img src={rating_img} alt="Rating" />
                    </div>
                    {settings.content && <p className="">{settings.content}</p>}
                    {settings.name && <span>{settings.name}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default indexTestimonialSection;
