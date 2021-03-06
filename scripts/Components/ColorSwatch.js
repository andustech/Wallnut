import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColorSwatchThumbImageUrl } from '../utils';

const ColorSwatch = ({ option, small }) => (
  <ColorSwatchContainer
    small={small}
    aria-label={`change to ${option.toLowerCase()} variant`}
    option={option}
  />
);

const ColorSwatchContainer = styled.div.attrs(({ small }) => {
  const size = small ? 'h-3 w-3' : 'h-5 w-5';
  return {
    className: `bg-white bg-no-repeat rounded-full ${size}`,
  }; 
})`
  ${({ option }) => `
    background-image: url(${getColorSwatchThumbImageUrl(option)});
    background-size: 100% 100%;
  `}
`;

ColorSwatch.defaultProps = {
  small: false,
};

ColorSwatch.propTypes = {
  option: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default ColorSwatch;
