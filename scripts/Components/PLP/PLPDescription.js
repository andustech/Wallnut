import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import parse from 'react-html-parser';
import { SectionTiltle } from '../ProductFeature/ValuePropComponent';

const PLPDescription = ({ collectionTitle, collectionDescription, filterRef }) => (
  <div ref={filterRef} className="pt-12 container">
    <div className="text-center">
      <SectionTiltle className="section_titile mb-0.5 md:mb-3">
        <h3 className="font-bold text-black capitalize">{collectionTitle}</h3>
      </SectionTiltle>
      <Description key="collection description">{parse(collectionDescription)}</Description>
    </div>
  </div>
);

PLPDescription.defaultProps = {
  collectionDescription: '',
};

PLPDescription.propTypes = {
  filterRef: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
  collectionDescription: PropTypes.string,
  collectionTitle: PropTypes.string.isRequired,
};

const Description = styled.div`
  max-width: 586px;
  margin: 0 auto;
  font-family: GoodSans-Light!important;
  font-weight: 300!important;
  font-size: 16px!important;
  line-height: 24px!important;
  letter-spacing: -.01em!important;
  @media screen and (max-width: 767px) {
    font-size: 12px!important;
    line-height: 18px!important;
  }
`;

export default PLPDescription;
