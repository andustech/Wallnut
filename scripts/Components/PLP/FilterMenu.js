import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FilterItem from './FilterItem';
import plpContext from './plpContext';
// import { plpColorFilterGroupIcons } from '../../utils';
import { MultiSwatchIcon } from '../Icons';

const toggleColorFilter = (allFilters, collectionTitle, tempArr) => {
  if (
    (collectionTitle === 'Dining Chairs' && tempArr.length === 0) ||
    (collectionTitle === 'Lounge Chairs' && tempArr.length === 0) ||
    (window.location.href.includes('all') &&
      allFilters.style.length > 0 &&
      allFilters.color.length === 1 &&
      tempArr.length === 0) ||
    (window.location.href.includes('all') &&
      allFilters.chairType.length > 0 &&
      allFilters.color.length === 1 &&
      tempArr.length === 0) ||
    (window.location.href.includes('pattern-chairs') &&
      allFilters.style.length > 0 &&
      allFilters.color.length === 1 &&
      tempArr.length === 0) ||
    (window.location.href.includes('pattern-chairs') &&
      allFilters.chairType.length > 0 &&
      allFilters.color.length === 1 &&
      tempArr.length === 0) ||
    (window.location.href.includes('seasonal-favorites') &&
      allFilters.style.length > 0 &&
      allFilters.color.length === 1 &&
      tempArr.length === 0) ||
    (window.location.href.includes('seasonal-favorites') &&
      allFilters.chairType.length > 0 &&
      allFilters.color.length === 1 &&
      tempArr.length === 0)
  ) {
    return ['All'];
  }
  return tempArr;
};

const FilterMenu = ({
  type,
  options = [],
  menuOpen,
  menuName,
  filterName,
  collectionTitle,
  TagSelected,
  setTagSelected,
  RemoveTag,
  setRemoveTag,
  slugValue,
  setMenuOpen,
}) => {
  const { allFilters, setAllFilters } = useContext(plpContext);
  const handleClick = (option) => {
    let tempArr = [...allFilters[filterName]];

    if (tempArr.includes('All')) {
      tempArr = [option];
    } else if (tempArr.includes(option)) {
      tempArr = tempArr.filter((item) => item !== option);
    } else {
      tempArr = [...tempArr, option];
    }
    const colorFilter = toggleColorFilter(allFilters, collectionTitle, tempArr);
    const tempArrCopy = [...colorFilter];
    tempArrCopy.reverse();
    setAllFilters({ ...allFilters, color: [...tempArrCopy] });

    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-color',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
  };

  if (type === 'colorpicker') {
    return (
      <MenuContainer id="filterMenu" {...{ menuOpen, menuName }}>
        {/* {Object.keys(plpColorFilterGroupIcons).map((color) => {
          const { group, background } = plpColorFilterGroupIcons[color];
          return (
            <div key={group}>
              <div
                className={`h-9 w-9 border-solid border-2 rounded-full grid justify-items-center items-center ${
                  allFilters.color.includes(group) ? ' border-blue' : 'border-white'
                }`}
                onClick={() => {
                  handleClick(group);
                }}
                onKeyUp={() => {}}
                role="button"
                tabIndex="0"
              >
                {group !== 'Multi' ? (
                  <StyledColorSwatch group={group} background={background} />
                ) : (
                  <StyledColorSwatch group={group}>
                    <MultiSwatchIcon />
                  </StyledColorSwatch>
                )}
              </div>
              <p className="text-center text-xxs font-normal font-serif mt-1">{group}</p>
            </div>
          );
        })} */}
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

const StyledColorSwatch = styled.div.attrs({
  className: 'bg-no-repeat h-8 w-8 rounded-full',
})`
  ${({ group, background = '' }) => {
    if (group !== 'Multi') {
      return `background-color: ${background}; background-size: 36px 36px;`;
    }
    return 'background-size: 36px 36px;';
  }}
`;
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
