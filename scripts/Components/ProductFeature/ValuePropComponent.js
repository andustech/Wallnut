import React from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel';

const ValuePropSection = ({settings, collection_handle_1, collection_handle_2, collection_handle_3}) => {
  const { title, subheading } = settings;
  let handle_1, handle_2, handle_3 = '';
  if (collection_handle_1) {
    handle_1 = `/collections/${collection_handle_1.handle}`;
  }
  if (collection_handle_2) {
    handle_2 = `/collections/${collection_handle_2.handle}`;
  }
  if (collection_handle_3) {
    handle_3 = `/collections/${collection_handle_3.handle}`;
  }


 let coll_image_1 = settings.default_image;
 let coll_image_2 = settings.default_image;
 let coll_image_3 = settings.default_image;
  if (collection_handle_1.image) {
    coll_image_1 = collection_handle_1.image.src;
  }
  if (collection_handle_2.image) {
    coll_image_2 = collection_handle_2.image.src;
  }
  if (collection_handle_3.image) {
    coll_image_3 = collection_handle_3.image.src;
  }

  const valueProps = [  
    {
      name: 'shop best sellers',
      img: 'https://i.ibb.co/PFjVJV6/Rectangle-2.png',
    },
    {
      name: 'shop Collection 1',
      img: 'https://i.ibb.co/9257W5S/Rectangle-3.png',
    },
    {
      name: 'shop Collection 2',
      img: 'https://i.ibb.co/828wz72/Rectangle-4.png',
    },
  ];

  const productImgs = [ 
    {
      url: coll_image_1,
      alt: 'Image',
      coll_text: collection_handle_1.title
    },
    {
      url: coll_image_2,
      alt: 'Image',
      coll_text: collection_handle_2.title
    },
    {
      url: coll_image_3,
      alt: 'Image',
      coll_text: collection_handle_3.title
    },
  ]

  return (
    <PremiumMainContainer className='premium_main_container section-padding'>
      <SectionTiltle className='section_titile'>
        { title && <h3 className="font-bold text-black">{title}</h3> }
        { subheading && <p className="h3-attila-sans font-medium">{subheading}</p> }
      </SectionTiltle>
      <div className="container">
        <ValuePropContainer className="hidden sm:flex">
          { collection_handle_1.handle && 
            <ValuePropColumn className='premium_card_container premium_pos'>
                <div className="premium_img_box">
                  <img className='premium_img object-cover' src={coll_image_1} />
                </div>
                { collection_handle_1.title && 
                  <div className="flex items-center text-base text-center whitespace-nowrap absolute left-0 bottom-0 premium_content">
                    <a className='premium_link bg-milk' href={handle_1}>Shop {collection_handle_1.title}</a>
                  </div>
                }
              </ValuePropColumn>
          }
          { collection_handle_2.handle &&
            <ValuePropColumn className='premium_card_container premium_pos'>
              <div className="premium_img_box">
                <img className='premium_img object-cover' src={coll_image_2} />
              </div>
              { collection_handle_2.title && 
                <div className="flex items-center text-base text-center whitespace-nowrap absolute left-0 bottom-0 premium_content">
                  <a className='premium_link bg-milk md:pl-5 md:pr-14' href={handle_2}>Shop {collection_handle_2.title}</a>
                </div>
              }
            </ValuePropColumn>
          }
          { collection_handle_3.handle && 
            <ValuePropColumn className='premium_card_container premium_pos'>
              <div className="premium_img_box">
                <img className='premium_img object-cover' src={coll_image_3} />
              </div>
              { collection_handle_3.title && 
                <div className="flex items-center text-base text-center whitespace-nowrap absolute left-0 bottom-0 premium_content">
                  <a className='premium_link bg-milk md:pl-4 md:pr-12' href={handle_3}>Shop {collection_handle_3.title}</a>
                </div>
              }
            </ValuePropColumn>
          }
        </ValuePropContainer>
        <ValuePropContainer className="sm:hidden">
          <ValuePropColumn className='premium_card_container premium_pos'>
              <Carousel images={productImgs} /> 
            </ValuePropColumn>
        </ValuePropContainer>
      </div>
    </PremiumMainContainer>
  );
};

export default ValuePropSection;

const PremiumMainContainer = styled.div`
`

export const SectionTiltle = styled.div`
  text-align: center;

`

const ValuePropContainer = styled.div.attrs({
  className:
    'h-full  m-auto prem-art',
})``;

const ValuePropColumn = styled.div.attrs({
  className: 'font-serif flex items-center relative',
})`

`;
