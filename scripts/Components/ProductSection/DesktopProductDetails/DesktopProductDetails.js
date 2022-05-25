import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OverviewSection from './OverviewSection';
import FeaturesSection from './FeaturesSection';
import SpecificationsSection from './SpecificationsSection';
import DeliverySection from './DeliverySection';

const DesktopProductDetails = ({ productTypeBlocks, blocks }) => {
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

  const activeStyles = 'pdp-tab border-b-2 border-black pb-5';
  const tabs = [howitwork_tab_heading, whylove_tab_heading, specifications_tab_heading, sprt_tab_heading].filter(
    (tab) => tab
  );

  return (
    <div className="hidden justify-items-center md:grid md:grid-cols-1 lg:px-28 md:px-10">
      <div className="border-b-2 w-10/12 grid justify-items-center max-w-screen-xxl">
        <div
          className={`cursor-pointer justify-items-center gap-18 flex flex-row pdp-tabs`}
        >
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={currentTab === tab ? activeStyles : 'pdp-tab'}
              onClick={() => setCurrentTab(tab)}
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-16 text-sm justify-items-center max-w-screen-xxl font-extralight flex flex-row w-10/12">
        {currentTab === howitwork_tab_heading && <OverviewSection productBlock={productBlock} blocks={blocks} />}
        {currentTab === whylove_tab_heading && <FeaturesSection productBlock={productBlock} />}
        {currentTab === specifications_tab_heading && <SpecificationsSection productBlock={productBlock} />}
        {currentTab === sprt_tab_heading && <DeliverySection productBlock={productBlock} />}
      </div>
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
