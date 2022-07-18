import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FilterItem from './FilterItem';

const FilterMenu = ({
  type,
  options = [],
  menuOpen,
  menuName,
  filterName,
  collectionTitle,
  RemoveTag,
  setRemoveTag,
  slugValue,
  setMenuOpen,
}) => {

  if (type === 'colorpicker') {
    return (
      <MenuContainer id="filterMenu" {...{ menuOpen, menuName }}>
        
      </MenuContainer>
    );
  }

  return (
    <StyleFilterMenuContainer>
      <MenuContainer id="filterMenu" {...{ menuOpen, menuName }}>
        {options.map((option, i) => (
          <FilterItem
            option={option}
            key={i}
            menuName={menuName}
            filterName={filterName}
            collectionTitle={collectionTitle}
            RemoveTag={RemoveTag}
            setRemoveTag={setRemoveTag}
            setMenuOpen={setMenuOpen}
            slugValue={slugValue}
          />
        ))}
      </MenuContainer>
    </StyleFilterMenuContainer>
  );
};

FilterMenu.defaultProps = {
  colors: [],
  collectionTitle: '',
};

FilterMenu.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  menuName: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  collectionTitle: PropTypes.string,
};

const MenuContainer = styled.div(({ menuOpen, menuName }) => [
  tw`w-full grid left-0 sm:left-0 ml:left-auto ml:z-50 z-0 bg-white ml:w-96 ml:absolute relative ml:grid-cols-2 ml:gap-3.5 gap-4`,
  !menuOpen && tw`hidden`,
  menuOpen && tw`visible`,
  menuName === 'collection' && tw` transform ml:translate-y-4.5 py-4 ml:px-4 px-0`,
  menuName === 'type' &&
    tw`transform -translate-x-33 ml:translate-y-4.5 py-4 ml:px-4 px-0 `,
  menuName === 'colorpicker' && tw`transform ml:px-3 py-3.5`,
  menuName === 'colorpicker' && menuOpen && tw`grid grid-cols-5 w-full justify-items-center`,
  `
  background: #fff;
  box-shadow: 0 3px 10px 0 rgb(71 89 113 / 13%);
  top: 41px;  
  @media(max-width: 1199px) {
    top: 0;
    box-shadow: none;
  }
  `,
]);

const StyleFilterMenuContainer = styled.div`
  position: 'absolute';
  top: '41px';
  left: 0;
  right: 0;
  @media (max-width: 1199px) {
    position: relative;
    top: 0;
  }
`;

export default FilterMenu;
