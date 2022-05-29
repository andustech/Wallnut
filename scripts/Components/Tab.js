import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import MobileContext from './ProductSection/MobileProductDetailsSection/mobileContext';

import { CloseIcon, OpenIcon } from './Icons';

const Tab = ({ tabName, children }) => {
  const { openSection, toggleOpenSection } = useContext(MobileContext);

  return (
    <div className="border-grey-50 border-b border-solid py-3">
      <div
        onClick={() => toggleOpenSection(tabName)}
        className="grid grid-cols-5"
        tabIndex={0}
        onKeyDown={() => {}}
        role="button"
      >
        <StyledTabName tabName={tabName} openSection={openSection}>
          {tabName}
        </StyledTabName>
        <AnimatePresence initial={false}>
          <div className="justify-items-end grid items-center col-span-1 pr-3">
            {tabName === openSection ? (
              <CloseIcon width="14" height="1" />
            ) : (
              <OpenIcon width="14" height="14" />
            )}
          </div>
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {tabName === openSection && (
          <motion.div
            className="py-8"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StyledTabName = styled.div.attrs ({
  className: 'col-span-4',
})`
  font-family: 'GoodSans';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;
`;

Tab.defaultProps = {
  children: {},
};

Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Tab;
