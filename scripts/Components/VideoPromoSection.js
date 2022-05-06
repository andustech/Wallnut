import React from 'react';
import styled from 'styled-components';
import { SectionTiltle } from './ProductFeature/ValuePropComponent';

const VideoPromoSection = () => {

  const bymoodData = [

    {
      img: 'https://i.ibb.co/Lgzd5b9/Rectangle-14.png',
      link: 'Playful',
    },

    {
      img: 'https://i.ibb.co/b27wX67/Rectangle-15.png',
      link: 'Sophisticated',
    }
  ];

  return (
    <>
      <WhiteCollectionContainer className='container flex'>
        <div className='white_coll_left'>
          <img src='https://i.ibb.co/vBp3wH6/Rectangle-7.png' />
        </div>
        <div className='white_coll_right'>
          <div className='item_box'>
            <div className='title_top'>NEW IN</div>

            <MiddContent>
              <h2>White </h2>
              <p>Collection</p>
              <a className='premium_link bg-milk' href=''>Shop Collection</a>
            </MiddContent>
          </div>
        </div>
      </WhiteCollectionContainer>


      <ShopByMood className='container'>
        <SectionTiltle>
          <h2>Shop by mood</h2>
        </SectionTiltle>

        <div className='mood_card_container flex '>
          {bymoodData.map((value, i) => (
            <a className='by_mood_card' key={i}>
              <img src={value.img} />
              <a href='#'>{value.link}</a>
            </a>  
          ))}
        </div>
      </ShopByMood>

    </>
  )

};



const WhiteCollectionContainer = styled.div`
  /* display: flex; */
`;

const MiddContent = styled.div`

  h2 {
    font-size: 48px !important;
    margin-bottom: 20px;
  }

  p {
    font-size: 48px !important;
    margin-bottom: 31px !important;
  }

  a {
    position: relative;
  }

  a:after {
  content: '';
  width: 17px;
  height: 10px;
  right: 25px;
  top: 18px;
  position: absolute;
  background-image: url('https://i.ibb.co/mhJXcrZ/Vector.png');
}
`;



const ShopByMood = styled.div`
  margin-top: 112px;
`


export default VideoPromoSection;
