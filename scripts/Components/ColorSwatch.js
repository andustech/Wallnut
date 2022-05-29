import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColorSwatchThumbImageUrl } from '../utils';

const ColorSwatch = ({ option, size }) => (
  <ColorSwatchContainer
    size={size}
    aria-label={`change to ${option.toLowerCase()} variant`}
    option={option}
  />
);

const ColorSwatchContainer = styled.div.attrs(({ size }) => {
  let className = 'bg-white bg-no-repeat rounded-full';

  if (size === 'small') {
    className = `${className} small-color-swatch`;
  }
  else if (size === 'medium') {
    className = `${className} medium-color-swatch`;
  }
  else {
    className = `${className} large-color-swatch`;
  }

  return {
    className,
  };
})`
  ${({ option }) => `
    background-image: url(${getColorSwatchThumbImageUrl(option)});
    background-size: 100% 100%;
  `}
`;

ColorSwatch.defaultProps = {
  size: 'large',
};

ColorSwatch.propTypes = {
  option: PropTypes.string.isRequired,
};

export default ColorSwatch;
