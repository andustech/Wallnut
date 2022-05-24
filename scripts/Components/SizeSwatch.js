import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSwatch = ({ option, small }) => (
  <SizeSwatchContainer
    small={small}
    aria-label={`change to ${option} variant`}
    option={option}
  >{option}</SizeSwatchContainer>
);

const SizeSwatchContainer = styled.div.attrs(({ small }) => {
  return {
    className: `bg-white bg-no-repeat text-center rounded-full`,
  }; 
})``;

SizeSwatch.defaultProps = {
  small: false,
};

SizeSwatch.propTypes = {
  option: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default SizeSwatch;
