import React from 'react';
import PropTypes from 'prop-types';

const QuestionmarkIcon = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6.5" cy="6.5" r="6.5" fill="black"/>
    <path
      d="M6.84695 7.65C6.82695 6.1 9.20695 6.08 9.20695 4.2C9.20695 2.79 8.25695 2 6.64695 2C4.83695 2 3.85695 3.1 4.01695 4.95H4.93695C4.73695 3.61 5.36695 2.82 6.61695 2.82C7.68695 2.82 8.32695 3.35 8.32695 4.24C8.32695 5.72 5.98695 5.56 6.00695 7.65H6.84695ZM6.39695 10.17C6.73695 10.17 7.03695 9.88 7.03695 9.52C7.03695 9.16 6.75695 8.88 6.39695 8.88C6.02695 8.88 5.73695 9.16 5.73695 9.52C5.73695 9.88 6.02695 10.17 6.39695 10.17Z"
      fill="#F4F2EC"
    />
  </svg>
  
);

QuestionmarkIcon.defaultProps = {
  width: '13',
  height: '13',
};

QuestionmarkIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default QuestionmarkIcon;
