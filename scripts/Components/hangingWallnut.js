import React from 'react';
import styled from 'styled-components';

const hangingWallnut = ({ settings, blocks }) => {
  const { section_title } = settings;
  const valueProps = [
    {
      name: 'shop best sellers',
      img: 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangel-43.jpg?v=1652424773',
      title: '1. Measure and mark',
      description:
        "Your artwork comes with a special tape measure that sticks right to the wall. It's like your personal helper to find the perfect height.",
    },
    {
      name: 'shop Collection 1',
      img: 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangle-44.jpg?v=1652424791',
      title: '2. Level and stick',
      description:
        'Our wall mount has a built-in level (cool, right?). Simply stick it to your wall and say goodbye to crooked artwork.',
    },
    {
      name: 'shop Collection 2',
      img: 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangle-45.jpg?v=1652424808',
      title: '3. Attach and enjoy!',
      description:
        'Just slide your art into place, relex, and enjoy. Maybe have a party to show off your beautiful walls. Be sure to invite us!',
    },
  ];

  return (
    <>
    <div className="container">
      <PremiumMainContainer className="premium_main_container section-padding">
        <SectionTiltle className="lg:text-center">
          { section_title && <h3 className="font-bold text-black mb-6 lg:mb-10">{section_title}</h3> }
        </SectionTiltle>
        <ValuePropContainer>
          {/* {valueProps.map((item, i) => (
            <ValuePropColumn key={i}>
              <div>
                <img src={item.img} />
              </div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </ValuePropColumn>
          ))} */}

          {blocks?.map((block, index)=>{
            const {settings} = block;
            const margin_class = index + 1 == blocks.length ? 'lg:mr-0 lg:w-4/12' : 'lg:mr-6 mb-8 lg:mb-0 lg:w-4/12';
            return (
                <>
                  <ValuePropColumn className={margin_class}>
                    <img src={settings.image} className="mb-3 lg:mb-3.5" />
                    <div>
                      <h5 className="h5-attila-sans mb-2 text-black">{settings.title}</h5>
                      <p className="mb-0">{settings.content}</p>
                    </div>
                  </ValuePropColumn>
                </>
              )
          })}
        </ValuePropContainer>

      </PremiumMainContainer>
    </div>
    </>
  );
};

export default hangingWallnut;

const PremiumMainContainer = styled.div`
  /* padding: 0 0 0 0 !important; */
`;

export const SectionTiltle = styled.div`
  
`;

const ValuePropContainer = styled.div.attrs({
  // className: 'flex mt-9 justify-between',
  className:
    'flex flex-col lg:flex-row',
})``;

const ValuePropColumn = styled.div.attrs({
  className: 'flex flex-col',
})`
  @media only screen and (min-width: 1024px) {
    img {
      height: 450px;
      object-fit: cover;
    } 
  }
`;
