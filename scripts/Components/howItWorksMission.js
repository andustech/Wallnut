import React from 'react';
import styled from 'styled-components';

const howItWorksMission = ({ settings }) => {
  const { image, title, content } = settings;
  
  return (
    <>
    <div className="container">
      <PremiumMainContainer className="premium_main_container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <img
                src={image}
                alt="Our mission"
                className="mb-4 lg:mb-0 w-full"
            />
          <OurMissionText>
            { title && <h2 className="font-bold text-black mb-2 lg:mb-4">{title}</h2> }
            {content && <p className="mb-0">{content}</p> }
          </OurMissionText>
        </div> 
      </PremiumMainContainer>
    </div>
    </>
  );
};

export default howItWorksMission;

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
  className: 'flex flex-col mb-8 lg:mb-0',
})`
  @media only screen and (min-width: 1024px) {
    img {
      height: 450px;
    } 
  }
`;

const OurMissionText = styled.div`
  max-width: 422px;
  margin: auto;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }

`;
