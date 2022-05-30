import React from 'react';
import PropTypes from 'prop-types';
import { ShippingBox, ReturnIcon } from '../../Icons';
import styled from 'styled-components';

const DeliverySection = ({ productBlock }) => {
  const { settings } = productBlock;
  const {
    sprt_1_title,
    sprt_1_paragraph,
    sprt_1_linkText,
    sprt_1_linkUrl,
    sprt_2_title,
    sprt_2_paragraph,
    sprt_2_linkText,
    sprt_2_linkUrl
  } = settings;

  return (
    <>
    <div className="pdp-tabs-sec pt-16 text-sm justify-items-center max-w-screen-xxl font-extralight flex flex-row xl:w-10/12 gap-20">
      <div className="mb-4 w-6/12">
        <IconTitleContainer>
          <div className="mb-6">
            {sprt_1_title && (
              <>
              <ShippingBox />
              <h3 className="text-base ml-5 inline">
                {sprt_1_title}
              </h3>
              </>
            )}
          </div>
          <div>
            {sprt_1_paragraph && (
              <>
              <p
                className="mb-0 inline"
                dangerouslySetInnerHTML={{ __html: sprt_1_paragraph }}
              />
              {sprt_1_linkText && sprt_1_linkUrl && (
                <Link className="inline-block ml-1" href={sprt_1_linkUrl}>
                  {sprt_1_linkText}
                </Link>
              )}
              </>
            )}
          </div>
        </IconTitleContainer>
      </div>
      <div className="mb-4 w-6/12">
        <IconTitleContainer>
          <div className="mb-6">
            {sprt_2_title && (
              <>
              <ReturnIcon/>
              <h3 className="text-base ml-5 inline">
                {sprt_2_title}
              </h3>
              </>
            )}
          </div>
          <div>
            {sprt_2_paragraph && (
              <>
              <p
                className="mb-0 inline"
                dangerouslySetInnerHTML={{ __html: sprt_2_paragraph }}
              />
              {sprt_2_linkText && sprt_2_linkUrl && (
                <Link className="inline-block ml-1" href={sprt_2_linkUrl}>
                  {sprt_2_linkText}
                </Link>
              )}
              </>
            )}
            
          </div>
        </IconTitleContainer>
      </div>
    </div>
    </>
  )
};

const IconTitleContainer = styled.div.attrs({
  className: 'items-center mb-3',
})`
  grid-template-columns: 2fr 12fr;
  svg {
    display: inline-block;
  }
  h3 {
    vertical-align: middle;
    vertical-align: middle;
    font-family: 'Nib-bold-pro';
    font-size: 24px !important;
    line-height: 33px !important;
    font-weight: 700;
    color: #000;
  }
  p {
    font-family: 'GoodSans';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #000000;
    a {
      text-decoration: underline;
      text-transform: lowercase;
      font-family: 'GoodSans';
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #000000;
    }
  }
`;

const Link = styled.a.attrs({
  className: 'mb-5',
})`
  text-decoration: underline;
  text-transform: lowercase;
  font-family: 'GoodSans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #000000;
`;

DeliverySection.defaultProps = {
  productBlock: {},
};

DeliverySection.propTypes = {
  productBlock: PropTypes.shape({}),
};

export default DeliverySection;
