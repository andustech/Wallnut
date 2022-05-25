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
            <p
              className="text-sm font-extralight mb-0 hidden md:block md:text-base"
              dangerouslySetInnerHTML={{ __html: sprt_1_paragraph }}
            />
          )}
          {sprt_1_linkText && sprt_1_linkUrl && (
            <Link className="hidden font-xs md:inline-block md:text-sm" href={sprt_1_linkUrl}>
              {sprt_1_linkText}
            </Link>
          )}
        </div>
      </IconTitleContainer>
    </div>
    <div className="mb-4 w-6/12">
      <IconTitleContainer>
        <div className="mb-6">
          {sprt_2_title && (
            <>
            <ReturnIcon height="55" />
            <h3 className="text-base ml-5 inline">
              {sprt_2_title}
            </h3>
            </>
          )}
        </div>
        <div>
          {sprt_2_paragraph && (
            <p
              className="text-sm font-extralight mb-0 hidden md:block md:text-base"
              dangerouslySetInnerHTML={{ __html: sprt_2_paragraph }}
            />
          )}
          {sprt_2_linkText && sprt_2_linkUrl && (
            <Link className="hidden font-xs md:inline-block md:text-sm" href={sprt_2_linkUrl}>
              {sprt_2_linkText}
            </Link>
          )}
        </div>
      </IconTitleContainer>
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
  }
`;

const Link = styled.a.attrs({
  className: 'font-serif mb-5 text-brown text-xs',
})`
  text-decoration: underline;
`;

DeliverySection.defaultProps = {
  productBlock: {},
};

DeliverySection.propTypes = {
  productBlock: PropTypes.shape({}),
};

export default DeliverySection;
