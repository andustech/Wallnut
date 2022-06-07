import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MenuIcon, PlusIcon, MultiSwatchIcon } from '../Icons';
import FilterMenu from './FilterMenu';
import plpContext from './plpContext';
import { plpColorFilterGroupIcons } from '../../utils';

const FilterDropdown = ({
  filterType,
  filterTitle,
  colorFilters = [],
  menuOpen = null,
  setMenuOpen,
  options = [],
  colors = [],
  filterName,
  collectionTitle,
  TagSelected,
  setTagSelected,
  RemoveTag,
  setRemoveTag,
  sortingApply,
  setSortingApply,
  sortingBy,
  count,slugValue
}) => {
  const { allFilters } = useContext(plpContext);
  const { color } = allFilters;
  const handleClick = () => {
    if (menuOpen !== filterType) {
      setMenuOpen(filterType);
    }
    if (menuOpen === filterType) {
      setMenuOpen(null);
    }
  };
  if (filterType === 'colorpicker') {
    return (
      <div className="col-span-2">
        <FilterContainer id="dropdown" onClick={handleClick}>
          <FilterTitle>{filterTitle}</FilterTitle>
          {color?.length > 0 && !color?.includes('All') && (
            <div className="flex gap-2 mr-2 md:mr-7">
              {color.map((colorItem, i) => {
                const icon = plpColorFilterGroupIcons[colorItem];
                const { group, background } = icon;
                if (i < 3) {
                  if (group !== 'Multi') {
                    return <StyledColorSwatch key={group} group={group} background={background} />;
                  }
                  return (
                    <StyledColorSwatch key={group} group={group}>
                      <MultiSwatchIcon />
                    </StyledColorSwatch>
                  );
                }
                return null;
              })}
              {color.length >= 3 && (
                <div className="self-center ml-0.5">
                  <PlusIcon />
                </div>
              )}
            </div>
          )}
          <IconContainer flip={menuOpen === 'colorpicker'}>
            <MenuIcon />
          </IconContainer>
        </FilterContainer>
        <FilterMenu
          filterName={filterName}
          menuOpen={menuOpen === filterType}
          menuName={filterType}
          type="colorpicker"
          filters={colorFilters}
          options={options}
          colors={colors}
          collectionTitle={collectionTitle}
          setTagSelected={setTagSelected}
          TagSelected={TagSelected}
          sortingBy={sortingBy}
          setMenuOpen={setMenuOpen}
        />
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <FilterDropdownItem>
        <FilterContainer id="dropdown" onClick={handleClick}>
          <FilterTitle>
            {filterTitle} {count > 0 && `(${count})`}
          </FilterTitle>
          <IconContainer flip={menuOpen === filterType}>
            <MenuIcon />
          </IconContainer>
        </FilterContainer>
        <FilterMenu
          filterName={filterName}
          menuOpen={menuOpen === filterType}
          menuName="collection"
          type="checkbox"
          options={options}
          RemoveTag={RemoveTag}
          setRemoveTag={setRemoveTag}
          sortingApply={sortingApply}
          setSortingApply={setSortingApply}
          setMenuOpen={setMenuOpen}
          slugValue={slugValue}

        />
      </FilterDropdownItem>
    </div>
  );
};

const FilterDropdownItem = styled.div.attrs({
  className: 'fltr-drpdwn-item',
})``;

const FilterContainer = styled.div.attrs({
  className: 'flex items-center mr-4 cursor-pointer fltr-drpdwn ',
})`
  @media (max-width: 767px) {
    margin-right: 0 !important;
  }
`;

const FilterTitle = styled.span.attrs({
  className: 'mr-5',
})`
  font-family: 'GoodSans';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 10px;
    line-height: 18px;
  }
`;

const StyledColorSwatch = styled.div.attrs({
  className: 'bg-no-repeat h-8 w-8 rounded-full border border-solid border-gray-300',
})`
  ${({ group, background = '' }) => {
    if (group !== 'Multi') {
      return `background-color: ${background}; background-size: 36px 36px;`;
    }
    return 'background-size: 36px 36px;';
  }}
`;

export const IconContainer = styled.div`
  transform: ${({ flip }) => (!flip ? 'rotate(0deg)' : 'rotate(180deg)')};
  @media (max-width: 767px) {
    transform: ${({ flip }) => (flip ? 'rotate(0deg)' : 'rotate(270deg)')};
  }
`;

FilterDropdown.defaultProps = {
  colorFilters: [],
  colors: [],
  options: [],
  menuOpen: '',
  collectionTitle: '',
};

FilterDropdown.propTypes = {
  filterTitle: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
  menuOpen: PropTypes.string,
  setMenuOpen: PropTypes.func.isRequired,
  colorFilters: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
  filterName: PropTypes.string.isRequired,
  collectionTitle: PropTypes.string,
};

export default FilterDropdown;
