import React from 'react';
import styled from 'styled-components';

const hangingWallnut = ({ settings }) => {
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
      <PremiumMainContainer className="premium_main_container px-5">
        <SectionTiltle className="section_titile">
          <h2 className="font-bold">Hanging your Wallnut art is easy as 1-2-3!</h2>
        </SectionTiltle>
        <ValuePropContainer>
          {valueProps.map((item, i) => (
            <ValuePropColumn key={i}>
              <div>
                <img src={item.img} />
              </div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </ValuePropColumn>
          ))}
        </ValuePropContainer>
      </PremiumMainContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 px-5">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangle-35.jpg?v=1652683698"
            alt="Our mission"
          />
        </div>
        <OurMissionText>
          <h2>Our mission</h2>
          <p>
            At Wallnut, we’re passionate about making it easy to transform your house into a home.
            We believe that art shouldn’t be difficult to find, frustrating to frame, or impossible
            to hang. That's why we spent years developing the perfect mounting system. And it's why
            we're constantly curating a high-quality art collection that will complement your space.{' '}
          </p>
        </OurMissionText>
      </div>
    </>
  );
};

export default hangingWallnut;

const PremiumMainContainer = styled.div`
  /* padding: 0 0 0 0 !important; */
`;

export const SectionTiltle = styled.div`
  text-align: center;
`;

const ValuePropContainer = styled.div.attrs({
  // className: 'flex mt-9 justify-between',
  className:
    'grid grid-cols-1 pt-6 justify-items-start justify-between w-full gap-4 mb-12 max-w-screen-xxl md:grid-cols-3 lg:gap-8 lg:grid-cols-3',
})``;

const ValuePropColumn = styled.div.attrs({
  className: 'flex flex-col mr-6',
})`
  img {
    height: 450px;
  }

  h2 {
    font-family: 'Attila Sans Uniform';
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-top: 14px;
  }

  p {
    font-family: 'Good Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;
  }
  
`;

const OurMissionText = styled.div`
  max-width: 422px;
  margin: auto;
  h2 {
    font-family: 'Nib Pro';
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 16px;
  }

  p {
    font-family: 'Good Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media only screen and (max-width: 1024px) {
    margin: 16px 20px auto !important;
    h2{
      font-size:36px;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    h2{
      font-size:24px;
      margin-bottom: 4px;
    }
  }
`;
