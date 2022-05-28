import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSwatch = ({ option, isSticky }) => (
  <SizeSwatchContainer
    isSticky={isSticky}
    aria-label={`change to ${option} variant`}
    option={option}
  >{option}</SizeSwatchContainer>
);

const SizeSwatchContainer = styled.div.attrs(({ isSticky }) => {
  let className = 'bg-white bg-no-repeat';
  if (isSticky) {
    className = `${className}`;
  }
  else {
    className = `${className} text-center rounded-full`;
  }
  
  return {
    className,
  };

})``;

SizeSwatch.defaultProps = {
  isSticky: false,
};

SizeSwatch.propTypes = {
  option: PropTypes.string.isRequired,
  isSticky: PropTypes.bool,
};

export default SizeSwatch;
