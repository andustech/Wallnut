import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ArrowDownIcon } from '../../Icons';

const MobileNavSlider = ({ isOpen, themeSettings }) => {
  const {
    email_text,
    twitter_url,
    facebook_url,
    instagram_url,
    pinterest_url,
    tumblr_url,
    youtube_url,
    googleplus_url,
    snapchat_id,
    weibo_id,
  } = themeSettings;

  const [openShop, setOpenShop] = useState(true);

  return (
    <>
      <Container isOpen={isOpen} id="mobile-nav-slider">
        <ShopContainer openShop={openShop} role="button" tabIndex="0" onKeyPress={() => {}}>
          <a href="/collections/all">
            <Title>Shop</Title>
          </a>
          <IconContainer onClick={() => setOpenShop(!openShop)}>
            <IconWrapper openShop={openShop}>
              <ArrowDownIcon />
            </IconWrapper>
          </IconContainer>
        </ShopContainer>
        <div className="flex flex-col h-1/4">
          <a href="/pages/about" className="mb-2">
            <Title>About</Title>
          </a>
          <a href="/pages/how-it-works">
            <Title>How it works</Title>
          </a>
        </div>
      </Container>
      <BgOverlay isOpen={isOpen} />

      <div className="globo-menu-mobile">
        <ul></ul>

        <div className="mx-5 mt-10 social-icons">
          {email_text && (
            <div className="soc_ico mb-3.5">
              <a className="text-black">{email_text}</a>
            </div>
          )}
          <div className="social_media_icon">
            {twitter_url && (
              <div className="soc_ico">
                <a href={twitter_url} target="_blank">
                  <i></i>
                </a>
              </div>
            )}
            {facebook_url && (
              <div className="soc_ico">
                <a href={facebook_url} target="_blank">
                  <i>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/facebook-black.svg?v=1652709438"
                      alt="Social icon"
                    />
                  </i>
                </a>
              </div>
            )}
            {instagram_url && (
              <div className="soc_ico">
                <a href={instagram_url} target="_blank">
                  <i>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/instagram-svg.svg?v=1652711813"
                      alt="Social icon"
                    />
                  </i>
                </a>
              </div>
            )}
            {pinterest_url && (
              <div className="soc_ico">
                <a href={pinterest_url} target="_blank">
                  <i></i>
                </a>
              </div>
            )}
            {tumblr_url && (
              <div className="soc_ico">
                <a href={tumblr_url} target="_blank">
                  <i></i>
                </a>
              </div>
            )}
            {youtube_url && (
              <div className="soc_ico">
                <a href={youtube_url} target="_blank">
                  <i>
                    <img src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/youtube_-black.svg?v=1654786484" alt="Social Icons" className="h-auto w-auto" />
                  </i>
                </a>
              </div>
            )}
            {googleplus_url && (
              <div className="soc_ico">
                <a href={googleplus_url} target="_blank">
                  <i></i>
                </a>
              </div>
            )}
            {snapchat_id && (
              <div className="soc_ico">
                <a href={snapchat_id} target="_blank">
                  <i></i>
                </a>
              </div>
            )}
            {weibo_id && (
              <div className="soc_ico">
                <a href={weibo_id} target="_blank">
                  <i></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{
        display: 'none',
      }} className="search-mob-div">
        <div data-autocomplete-true>
          <form action="/search" method="get" className="search-form search-form-mob active">
            <div className="">
                <input type="text" name="q" className="normal-case" id="q" placeholder="Search.." autoComplete="off" /><img src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/search-icon.svg?v=1652783584" alt="Serach" className="search_icon search-bar-icon" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const ShopContainer = styled.div(({ openShop }) => [
  tw`flex mt-4 w-full`,
  openShop ? tw`mb-6` : tw`mb-0`,
]);

const IconContainer = styled.div(() => [tw`flex items-center w-full justify-end `]);

const IconWrapper = styled.div(({ openShop }) => [
  tw`transform transition-transform duration-150 ease-in-out`,
  !openShop && tw`rotate-180`,
]);


const Title = styled.div(() => [tw`text-base font-normal font-serif uppercase`]);

const Container = styled.div.attrs(({ isOpen }) => {
  const className =
    'top-14 absolute overflow-y-auto px-4.5 pb-33 left-0 w-screen h-screen bg-grey transform hidden ';
  return {
    className:
      className + (isOpen ? 'translate-y-0 z-50 opacity-100' : 'translate-y-full opacity-0'),
  };
})`
  max-width: 400px;
  @media screen and (min-width: 768px) {
    top: 83px !important;
  }
`;

const BgOverlay = styled.div(({ isOpen }) => [``]);

MobileNavSlider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  themeSettings: PropTypes.shape({}).isRequired,
};

export default MobileNavSlider;
