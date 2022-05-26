import React from 'react';
import PropTypes from 'prop-types';

const OpenIcon = ({ width = '14', height = '14' }) => (
  <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M7 0C6.69046 0 6.44 0.250468 6.44 0.56V6.44H0.56C0.25046 6.44 0 6.69047 0 7C0 7.30953 0.250468 7.56 0.56 7.56H6.44V13.44C6.44 13.7495 6.69047 14 7 14C7.30953 14 7.56 13.7495 7.56 13.44V7.56H13.44C13.7495 7.56 14 7.30953 14 7C14 6.69047 13.7495 6.44 13.44 6.44H7.56V0.56C7.56 0.25046 7.30953 0 7 0Z"
      fill="black"
    />
  </svg>
);

OpenIcon.defaultProps = {
  width: '17',
  height: '16',
};

OpenIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OpenIcon;
