import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import MobileNav from './MobileNav';
import CartHighlight from '../CartHighlight';

const Header = (props) => {
  const { themeSettings, newsettings, mobileNavSettings, cartCount } = props;
  const [isShown, setIsShown] = useState(false);
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    setSticky(window.pageYOffset > 50);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <HeaderContainer sticky={sticky}>
        <nav className="flex w-full justify-between container mx-auto bg-white h-full my-3.5 lg:my-0">
          <div className="block lg:hidden flex-1 lg:flex-none">
            <MobileNav settings={mobileNavSettings} themeSettings={themeSettings} />
          </div>
          <a className="flex items-center justify-center flex-1 lg:flex-none" href="/">
            <LogoImage
              src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Wallnut_Wordmark_RGB_Black_1_1.svg?v=1653293852"
              alt="Wallnut"
            />
          </a>
          <div className="hidden lg:flex">
            <ul className="nav_menu_opt flex text-center items-center">
              <li onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <LinkItem href="/collections/all">SIZE</LinkItem>
                <NavWrapper isShown={isShown}>
                  <Nav themeSettings={themeSettings} newsettings={newsettings} />
                </NavWrapper>
              </li>
              <li>
                <LinkItem href="/about">SUBJECT</LinkItem>
              </li>
              <li>
                <LinkItem href="/pages/how-it-works">MOOD</LinkItem>
              </li>

              <li>
                <LinkItem href="/pages/how-it-works">STYLE</LinkItem>
              </li>

              <li>
                <LinkItem href="/pages/how-it-works">HIDE IT WORK</LinkItem>
              </li>
            </ul>
          </div>
          <div className="header-search-minicart-container flex-1 lg:flex-none">
            <div className="">
              <div id="header-search" className="desktop-3 tablet-hide mobile-hide mb-0.5">
                <a href="#" className="inline-block">
                  <img src='https://cdn.shopify.com/s/files/1/0627/3476/2207/files/search-icon.svg?v=1652783584' className='search_icon' />
                </a>
              </div>
            </div>

            <div id="mini-cart-container" className="block">
              <a
                href="/cart"
                className="site-header__cart-toggle js-drawer-open-right block ml-6"
                aria-controls="CartDrawer"
                aria-expanded="false"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/cart-icon.svg?v=1652783627"
                  alt="cart"
                />
                {/* <div className="cart-count font-serif text-sm"></div> */}
                {/* <CartHighlight cartCount={cartCount} /> */}
              </a>
            </div>
          </div>
        </nav>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled.div.attrs(({ sticky }) => {
  const className = 'flex items-center justify-center w-full bg-white navbar ';
  const fixed = 'fixed top-0 z-10';
  return { className: sticky ? `${className}, ${fixed}` : `${className}` };
})`
  height: 70px;
  border-bottom: 1px solid #d5d5d5;
  @media screen and (max-width: 1024px) {
    height: 50px;
  }
`;

const NavWrapper = styled.div.attrs(({ isShown }) => {
  const className = 'flex w-full';
  return { className: isShown ? `${className}` : `${className} hidden` };
})`
  position: fixed;
  background-color: #f5f5f5;
  transform: translateY(21px);
  z-index: 5;
  left: 0;
  justify-content: center;
`;

const LinkItem = styled.a.attrs({
  className:
    'relative hover:no-underline text-blue-dark uppercase',
})`
  &:hover {
    &:after {
      content: '';
      background-color: #ad6433;
      height: 3px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const LogoImage = styled.img`
  // @media screen and (max-width: 1024px) {
  //   max-width: 83px;
  // }
  @media screen and (min-width: 1024px) {
    max-width: 130px;
  }
`;

Header.propTypes = {
  themeSettings: PropTypes.shape({}).isRequired,
  newsettings: PropTypes.shape({}).isRequired,
  mobileNavSettings: PropTypes.shape({}).isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default Header;
