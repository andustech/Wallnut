/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { QuestionmarkIcon, ShippingBox } from '../../../Icons';

const PDPMessaging = ({ productMessaging }) => {
  const { shippingMessage, shippingTime, shippingMessageInfo, shippingMessageInfoHeight } = productMessaging;
  const [hideBox, setHideBox] = useState(true);
  const handleClick = (e) => {
    if (!hideBox) {
      if (e.target.id !== 'messagebox' && e.target.lastChild.id !== 'messagebox') {
        setHideBox(true);
      }
    }
  };
  const hendleBoxHeight = (e) => {
    var height = document.getElementById('messagebox').offsetHeight;
    document.getElementById("infobox").style.height = height+"px";
  };
  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [hideBox]);

  if (shippingMessage !== undefined && shippingTime !== undefined) {
    return (
      <div className="flex text-grey-about text-sm font-serif mt-5 lg:mt-8 pt-3 pb-3 pl-6 pr-6" style={{backgroundColor: '#F4F2EC'}}>
        <div className="flex items-start lg:items-center">
          <ShippingBox />
        </div>
        <Divider />
        <div className="whitespace-nowrap">
          <div className="ship-msg">
            {shippingMessage}
          </div>
          
          <div className="time-msg">
            {shippingTime}
            <div className="inline-block ml-1" style={{verticalAlign: "middle"}}>
              <div
                onClick={() => {
                  setHideBox(!hideBox);
                  hendleBoxHeight();
                }}
                onKeyDown={() => {}}
                tabIndex={0}
                role="button"
                className="flex items-center h-full"
              >
                <QuestionmarkIcon />
              </div>
              <StyledProductMessageContainer
                hideBox={hideBox}
                id="infobox"
              >
                <div
                  className="flex items-center absolute whitespace-normal text-white p-2 leading-4 text-xxs"
                  id="messagebox"
                >
                  {shippingMessageInfo}
                </div>
              </StyledProductMessageContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const StyledProductMessageContainer = styled.div.attrs((props) => ({
  className: `${props.hideBox ? 'invisible' : 'visible'} absolute w-52 bg-grey-about transform -translate-x-3/4 md:-translate-x-1/2 translate-y-1.5`,
}))``;

const Divider = styled.div`
  width: 1px;
  margin: 0 24px;
  background: #000000;
`;

PDPMessaging.defaultProps = {
  productMessaging: {},
};

PDPMessaging.propTypes = {
  productMessaging: PropTypes.shape({
    shippingMessage: PropTypes.string,
    shippingTime: PropTypes.string,
    shippingMessageInfo: PropTypes.string,
    shippingMessageInfoHeight: PropTypes.number,
  }),
};

export default PDPMessaging;
