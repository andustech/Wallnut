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
        <nav className="flex w-full justify-between container mx-auto bg-white h-full">
          <div className="block lg:hidden">
            <MobileNav settings={mobileNavSettings} themeSettings={themeSettings} />
          </div>
          <a className="flex items-center" href="/">
            <LogoImage
              src="https://i.ibb.co/DMpK1q6/logo.png"
              alt="Levity"
            />
          </a>
          <div className="hidden lg:flex">
            <ul className="flex text-center items-center">
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
          <div className="header-search-minicart-container">
            <div className="hidden lg:block">
              <div id="header-search" className="desktop-3 tablet-hide mobile-hide">
                <form action="/search" method="get">
                  <img src='https://i.ibb.co/YNvzb2s/Vector.png' className='search_icon' />
                </form>
              </div>
            </div>

            <div id="mini-cart-container">
              <a
                href="/cart"
                className="site-header__cart-toggle js-drawer-open-right"
                aria-controls="CartDrawer"
                aria-expanded="false"
              >
                <img
                  src="https://i.ibb.co/8dPZN7G/cart-icon.png"
                  alt="cart"
                />
                {/* <div className="cart-count font-serif text-sm"></div> */}
                <CartHighlight cartCount={cartCount} />
              </a>
            </div>
          </div>
        </nav>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled.div.attrs(({ sticky }) => {
  const className = 'flex items-center justify-center w-full ';
  const fixed = 'fixed top-0 z-10';
  return { className: sticky ? `${className}, ${fixed}` : `${className}` };
})`
  height: 70px;
  border-bottom: 1px solid #d5d5d5;
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
    'relative hover:no-underline font-serif text-base font-normal text-blue-dark uppercase pb-7 px-4',
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
  @media screen and (max-width: 1024px) {
    max-width: 83px;
  }
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
