import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import parse from 'react-html-parser';
import { SectionTiltle } from '../ProductFeature/ValuePropComponent';

const PLPDescription = ({ collectionTitle, collectionDescription, filterRef }) => (
  <div ref={filterRef} className="pt-12 container">
    <div className="text-center">
      <SectionTiltle className="section_titile pdp">
        <h2 className="font-bold text-black">{collectionTitle}</h2>
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
`;

export default PLPDescription;
