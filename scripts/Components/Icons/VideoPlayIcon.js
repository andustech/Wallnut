import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayIcon = ({ width, height }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.0006 0C6.28059 0 0 6.28059 0 13.9979C0 21.7153 6.28209 27.9959 14.0006 27.9959C21.719 27.9959 28 21.7168 28 13.9994C28 6.28209 21.7209 0 14.0006 0ZM26.9535 13.9979C26.9535 21.1374 21.1434 26.9494 14.0006 26.9494C6.85657 26.9494 1.04764 21.1408 1.04764 13.9979C1.04764 6.85507 6.8592 1.04501 14.0006 1.04501C21.1431 1.04501 26.9535 6.85507 26.9535 13.9979Z"
            fill="black"
        />
        <path
            d="M20.4699 13.4335L10.8971 8.64787C10.6449 8.52622 10.3401 8.57019 10.1407 8.7622C10.0191 8.88679 9.9502 9.05388 9.9502 9.23563V18.7631C9.9502 19.1324 10.2302 19.4227 10.5863 19.4227C10.6933 19.4227 10.7974 19.3977 10.8971 19.3494L20.4669 14.5607C20.6985 14.4464 20.8363 14.2353 20.8363 13.9978C20.8377 13.7604 20.7014 13.5479 20.4698 13.4335L20.4699 13.4335ZM19.2563 13.9979L10.9982 18.1269V9.87033L19.2563 13.9979Z"
            fill="black"
        />
    </svg>
);

VideoPlayIcon.defaultProps = {
  width: '28',
  height: '28',
};

VideoPlayIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default VideoPlayIcon;