import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const indexTestimonialSection = ({ settings, blocks }) => {
  const { title, content } = settings;

  return (
    <>
        <div className="review_main_container">
            <div className="container">
                <div className="review_inner_items">
                    <div className="left">
                        { title && <h2>{title}</h2> }
                        { content && <p>{content}</p> }
                    </div>
                    <div className="right">
                        {blocks.map((block, index)=>{
                            const {settings} = block;
                            return (
                                <div className="review_card">
                                    <div className="img"><img src={settings.image} alt="Testimonial" /></div>
                                    <div className="rating_start">
                                        <img src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/5-star.svg?v=1652188676" alt="5 star" />
                                    </div>
                                    { settings.content && <p>{settings.content}</p> }
                                    { settings.name && <span>{settings.name}</span> }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )

};


export default indexTestimonialSection;
