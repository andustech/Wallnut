import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ width = '14', height = '1' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0.5" y1="0.5" x2="13.5" y2="0.5" stroke="black" stroke-linecap="round"/>
  </svg>
);

CloseIcon.defaultProps = {
  width: '14',
  height: '1',
};

CloseIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CloseIcon;
