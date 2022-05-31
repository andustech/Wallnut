import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = ({ width = '12', height = '12', fill = 'none' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.25" y="0.25" width="11.5" height="11.5" stroke="black" strokeOpacity="0.7" strokeWidth="0.5"/>
    { fill === '#000' && (
      <rect x="2" y="2" width="8" height="8" fill="black"/>
    )}
  </svg>
);

Rectangle.defaultProps = {
  width: '12',
  height: '12',
  fill: 'none',
};

Rectangle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Rectangle;
