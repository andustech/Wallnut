import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Delivery = ({ sectionDataWithIcons }) => (
  <>
    {sectionDataWithIcons.map((section, i) => (
      <div className="mb-4 w-6/12" key={i}>
        <IconTitleContainer>
          <div className="mb-6">
            {section.icon && section.icon}
            {section.title && (
              <h3 className="text-base ml-5 inline">
                {section.title}
              </h3>
            )}
          </div>
          <div>
            {section.paragraph && (
              <p
                className="text-sm font-extralight mb-0 hidden md:block md:text-base"
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
              />
            )}
            {section.linkUrl && section.linkText && (
              <Link className="hidden font-xs md:inline-block md:text-sm" href={section.linkUrl}>
                {section.linkText}
              </Link>
            )}
          </div>
        </IconTitleContainer>
        {section.paragraph && (
          <p
            className="text-sm font-extralight mb-0 md:hidden md:text-base"
            dangerouslySetInnerHTML={{ __html: section.paragraph }}
          />
        )}
        {section.linkUrl && section.linkText && (
          <Link className="md:hidden" href={section.linkUrl}>
            {section.linkText}
          </Link>
        )}
      </div>
    ))}
  </>
);

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

Delivery.propTypes = {
  sectionDataWithIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Delivery;
