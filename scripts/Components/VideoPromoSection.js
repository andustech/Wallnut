import React from 'react';
import styled from 'styled-components';

const VideoPromoSection = () => {

  return (
    <>
      <VideoContainer className='container flex'>
        <div className='white_coll_left'>
          <img src='https://i.ibb.co/vBp3wH6/Rectangle-7.png' />
        </div>
        <div className='white_coll_right'>
          <div className='item_box'>
            <div className='title_top'>NEW IN</div>

            <MiddContent>
              <h2>White </h2>
              <p>Collection</p>
            </MiddContent>
          </div>
        </div>
      </VideoContainer>
    </>
  )

};



const VideoContainer = styled.div`
  /* display: flex; */
`;

const MiddContent = styled.div`

  h2 {
    font-size: 48px !important;
  }

  p {
    font-size: 48px !important;
    margin-bottom: 31px !important;
  }
`;


export default VideoPromoSection;
