import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import MobileContext from './mobileContext';

import HowItWorkTab from './HowItWorkTab';
import FeaturesTab from './FeaturesTab';
import SpecificationsTab from './SpecificationsTab';
import DeliveryTab from './DeliveryTab';

const MobileProductDetailsSection = (props) => {
  const { productTypeBlock, blocks } = props;
  const [openSection, setOpenSection] = useState('');

  const detailsRef = useRef();

  const toggleOpenSection = (tabName) => {
    if (tabName !== openSection) {
      setOpenSection(tabName);
    } else {
      setOpenSection('');
    }
    window.scrollTo({
      behavior: 'auto',
      top: detailsRef.current.offsetTop,
    });
  };

  const contextValue = {
    openSection,
    toggleOpenSection,
  };

  return (
    <MobileContext.Provider value={contextValue}>
      <div className="grid md:none" ref={detailsRef}>
        <HowItWorkTab productTypeBlock={productTypeBlock} />
        <FeaturesTab productTypeBlock={productTypeBlock} />
        <SpecificationsTab productTypeBlock={productTypeBlock} />
        <DeliveryTab productTypeBlock={productTypeBlock} />
      </div>
    </MobileContext.Provider>
  );
};

MobileProductDetailsSection.defaultProps = {
  blocks: [],
  productTypeBlock: {},
};

MobileProductDetailsSection.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape({})),
  productTypeBlock: PropTypes.shape({}),
};

export default MobileProductDetailsSection;
