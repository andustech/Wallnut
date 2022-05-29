import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OverviewSection from './OverviewSection';
import FeaturesSection from './FeaturesSection';
import SpecificationsSection from './SpecificationsSection';
import DeliverySection from './DeliverySection';

const DesktopProductDetails = ({ productTypeBlocks, blocks, frameSelected, frameColorSelected, }) => {
  const [currentTab, setCurrentTab] = useState('');
  const productBlock = productTypeBlocks.find((block) => block.type === 'product_details');
  const { howitwork_tab_heading, whylove_tab_heading, specifications_tab_heading, sprt_tab_heading } = productBlock
    ? productBlock.settings
    : {};

  useEffect(() => {
    setCurrentTab(howitwork_tab_heading);
  }, [howitwork_tab_heading]);

  if (!productBlock) {
    return null;
  }

  const activeStyles = 'pdp-tab pb-5 active';
  const tabs = [howitwork_tab_heading, whylove_tab_heading, specifications_tab_heading, sprt_tab_heading].filter(
    (tab) => tab
  );

  return (
    <div className="hidden justify-items-center md:grid md:grid-cols-1 container">
      <div className="border-b-2 xl:w-10/12 grid justify-items-center max-w-screen-xxl">
        <div
          className={`cursor-pointer justify-items-center flex flex-row pdp-tabs`}
        >
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={currentTab === tab ? activeStyles : 'pdp-tab'}
              onClick={() => setCurrentTab(tab)}
              role="button"
              onKeyDown={() => { }}
              tabIndex={0}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      {currentTab === howitwork_tab_heading && <OverviewSection productBlock={productBlock} blocks={blocks} />}
      {currentTab === whylove_tab_heading && <FeaturesSection productBlock={productBlock} />}
      {currentTab === specifications_tab_heading && (
        <SpecificationsSection
          productBlock={productBlock}
          frameSelected={frameSelected}
          frameColorSelected={frameColorSelected}
        />
      )}
      {currentTab === sprt_tab_heading && <DeliverySection productBlock={productBlock} />}
    </div>
  );
};

DesktopProductDetails.defaultProps = {
  blocks: [],
  productTypeBlocks: [],
};

DesktopProductDetails.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
  productTypeBlocks: PropTypes.arrayOf(PropTypes.object),
};

export default DesktopProductDetails;
