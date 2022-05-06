import React from 'react';
import styled from 'styled-components';


const ValuePropSection = () => {
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

  return (
    <PremiumMainContainer>
      <SectionTiltle>
        <h2>Premium art</h2>
        <p>that’s painless to hang</p>
      </SectionTiltle>
      <ValuePropContainer>

        {valueProps.map((item, i) => (
          <ValuePropColumn key={i}>
            <div className="premium_img_box">
              <img className='premium_img' src={item.img} />
            </div>
            <div className="flex items-center text-base text-center whitespace-nowrap absolute left-0 bottom-0">
              <a className='premium_link bg-milk' href=''>{item.name}</a>
            </div>
          </ValuePropColumn>
        ))}
      </ValuePropContainer>
    </PremiumMainContainer>
  );
};

export default ValuePropSection;

const PremiumMainContainer = styled.div`
  padding: 72px 0 0 0;
`

export const SectionTiltle = styled.div`
  text-align: center;

  h2 {
    font-size: 36px !important;
    margin-bottom: 15px !important;
  }

  p {
    font-size: 36px !important;
    margin-bottom: 40px !important;
  }
`

const ValuePropContainer = styled.div.attrs({
  className:
    'items-center justify-between h-full flex flex-col md:flex-row container m-auto',
})``;

const ValuePropColumn = styled.div.attrs({
  className: 'font-serif flex items-center md:flex-col relative',
})`
  @media screen and (max-width: 768px) {
    width: 240px;
  }
`;
