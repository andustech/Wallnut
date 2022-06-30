import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MobileNavIcon from './MobileNavIcon';
import MobileNavSlider from './MobileNavSlider';

const MobileNav = ({themeSettings}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.querySelector('.js').style.paddingBottom = '0px';
    if (document.querySelector('#preview-bar-iframe')) {
      document.querySelector('#preview-bar-iframe').remove();
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.height = '100vh';
      document.documentElement.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
      document.body.style.postion = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
  }, [open]);

  return (
    <MobileNavWrapper>
      <MobileNavSlider
        isOpen={open} themeSettings={themeSettings}
      />
      <BgOverlay isOpen={open} />
      <div
        onClick={handleClick}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
        className="h-4 flex justify-center lg:hidden toggle-button"
      >
        <MobileNavIcon isOpen={open} setOpen={setOpen} />
      </div>
      <img src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/close-img-black.png?v=1654240702" className="search_icon close cart-close hidden" />
    </MobileNavWrapper>
  );
};

const MobileNavWrapper = styled.div.attrs({
  className: 'flex items-center lg:hidden h-full',
})``;

const BgOverlay = styled.div(({ isOpen }) => [
  ` 
  background-color: #000;
  height: 100 vh;
  width: 100 vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  opacity: 0.65;
  `,
  !isOpen && `display: none;`,
  isOpen && `display:block;`,
]);

MobileNav.propTypes = {
  themeSettings: PropTypes.shape({}).isRequired,
};

export default MobileNav;
