import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ width = '12', height = '8' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 1.6135L1.21145 0.5L6 5.19324L10.7886 0.5L12 1.6135L5.99994 7.5L0 1.6135Z"
      fill="black"
    />
  </svg>
);

MenuIcon.defaultProps = {
  width: '12',
  height: '8',
};

MenuIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MenuIcon;
