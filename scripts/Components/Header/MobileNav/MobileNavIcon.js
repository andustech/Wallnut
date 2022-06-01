import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const MobileNavIcon = ({ isOpen }) => (
  <NavIcon style={{width: "19px"}}>
    <Span style={{height: "1px"}} smallwidth className="top-0" isOpen={isOpen}  />
    <Span style={{height: "1px"}} rotateRight className="top-2 rotateRight" isOpen={isOpen}  />
    <Span style={{height: "1px"}} rotateLeft className="top-2 rotateLeft" isOpen={isOpen}  />
    <Span style={{height: "1px"}} smallwidth className="top-4" isOpen={isOpen}  />
  </NavIcon>
);

const Span = styled.div(({ isOpen, smallwidth, rotateRight, rotateLeft }) => [
  tw`block absolute h-0.5 w-full bg-black rounded opacity-100 left-0 transform rotate-0 transition	duration-200 ease-in-out`,
  isOpen && smallwidth && tw`top-4 w-0 left-2/4`,
  isOpen && rotateRight && tw`transform rotate-45`,
  isOpen && rotateLeft && tw`transform -rotate-45`,
]);

const NavIcon = styled.div(() => [
  tw`relative w-7 transform rotate-0 transition	duration-500 ease-in-out cursor-pointer`,
]);

MobileNavIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileNavIcon;
