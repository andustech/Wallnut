import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown';
import plpContext from './plpContext';
import {
  subjectOption,
  artOption,
  colorObject,
  decorOption,
  mediumOption,
  moodOption,
  orientationOption,
} from './FilterOptionValues';
const MobileFilters = ({
  stickyFilter,
  setTagSelected,
  TagSelected,
  setIsRemoving,
  products,
  isOpenFilter,
  setIsOpenFilter,
  slugValue,
  isRemoving,
}) => {
  const { allFilters, setAllFilters, checkFilters } = useContext(plpContext);
  const {
    style,
    chairType,
    color,
    size,
    subject,
    mood,
    decorStyle,
    artStyle,
    orientation,
    medium,
    colorObj,
  } = allFilters;
  const [menuOpen, setMenuOpen] = useState('');
  const [RemoveTag, setRemoveTag] = useState({});

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (menuOpen) {
        const idArr = [];
        e.composedPath().forEach((element) => {
          idArr.push(element.id);
        });
        if (!idArr.includes('filterMenu') && !idArr.includes('dropdown')) {
          setMenuOpen('');
        }
      }
    });
    return () => {
      document.body.removeEventListener('click', (e) => {
        if (menuOpen) {
          const idArr = [];
          e.composedPath().forEach((element) => {
            idArr.push(element.id);
          });
          if (!idArr.includes('filterMenu') && !idArr.includes('dropdown')) {
            setMenuOpen(null);
          }
        }
      });
    };
  }, [menuOpen]);
  useEffect(() => {
    slugValueFindInfilter();
  }, [slugValue]);

  const slugValueFindInfilter = () => {
    let filterName = '';
    // let sizeFilter = sizeOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
    // slugValue = slugValue.replace('%20', ' ');
    let subjectFilter = subjectOption.filter((i) => i.toLowerCase() === slugValue?.toLowerCase());
    let orientationOptionFilter = orientationOption.filter(
      (i) => i.toLowerCase() === slugValue.toLowerCase()
    );
    let mediumOptionFilter = mediumOption.filter(
      (i) => i.toLowerCase() === slugValue.toLowerCase()
    );
    let decorOptionFilter = decorOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
    let artOptionFilter = artOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
    let moodOptionFilter = moodOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
    let colorObjectOptionFilter = colorObject.filter(
      (i) => i.toLowerCase() === slugValue.toLowerCase()
    );

    if (subjectFilter.length !== 0) {
      filterName = 'subject';
    } else if (orientationOptionFilter.length !== 0) {
      filterName = 'orientation';
    } else if (mediumOptionFilter.length !== 0) {
      filterName = 'medium';
    } else if (decorOptionFilter.length !== 0) {
      filterName = 'decorStyle';
    } else if (artOptionFilter.length !== 0) {
      filterName = 'artStyle';
    } else if (moodOptionFilter.length !== 0) {
      filterName = 'mood';
    } else if (colorObjectOptionFilter.length !== 0) {
      filterName = 'colorObj';
    }
    const tempEntry = {
      tagType: filterName,
      tagValue:
        slugValue.substring(0, 1).toUpperCase() + slugValue.substring(1).replace('&', ' & '),
    };
    console.log('tempEntry', tempEntry, TagSelected);
    let tempRes = TagSelected.filter(
      (i) => i.tagType === tempEntry.tagType && i.tagValue === tempEntry.tagValue
    );
    if (
      tempRes.length === 0 &&
      !isRemoving &&
      tempEntry.tagType !== '' &&
      tempEntry.tagValue !== ''
    ) {
      setTagSelected([...TagSelected, tempEntry]);

      if (filterName !== '') {
        const demo = {
          ...allFilters,
          [filterName]: [
            ...allFilters[filterName],
            slugValue.substring(0, 1).toUpperCase() + slugValue.substring(1),
          ],
        };
        setAllFilters(demo);
      }
    }
    // setAllFilters({ ...tempArr, slugValue });
  };
  const handleClearAll = () => {
    // if (slugValue !== null) {
    //   let subjectFilter = subjectOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
    //   let orientationOptionFilter = orientationOption.filter(
    //     (i) => i.toLowerCase() === slugValue.toLowerCase()
    //   );
    //   let mediumOptionFilter = mediumOption.filter(
    //     (i) => i.toLowerCase() === slugValue.toLowerCase()
    //   );
    //   let decorOptionFilter = decorOption.filter(
    //     (i) => i.toLowerCase() === slugValue.toLowerCase()
    //   );

    //   let artOptionFilter = artOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
    //   let moodOptionFilter = moodOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
    //   let colorObjectOptionFilter = colorObject.filter(
    //     (i) => i.toLowerCase() === slugValue.toLowerCase()
    //   );
    //   let existingTagValue = {};
    //   if (subjectFilter.length !== 0) {
    //     existingTagValue = { tagType: 'subject', tagValue: subjectFilter[0] };
    //   } else if (orientationOptionFilter.length !== 0) {
    //     existingTagValue = { tagType: 'orientation', tagValue: orientationOptionFilter[0] };
    //   } else if (mediumOptionFilter.length !== 0) {
    //     existingTagValue = { tagType: 'medium', tagValue: mediumOptionFilter[0] };
    //   } else if (decorOptionFilter.length !== 0) {
    //     existingTagValue = { tagType: 'decorStyle', tagValue: decorOptionFilter[0] };
    //   } else if (artOptionFilter.length !== 0) {
    //     existingTagValue = { tagType: 'artStyle', tagValue: artOptionFilter[0] };
    //   } else if (moodOptionFilter.length !== 0) {
    //     existingTagValue = { tagType: 'mood', tagValue: moodOptionFilter[0] };
    //   } else if (colorObjectOptionFilter.length !== 0) {
    //     existingTagValue = { tagType: 'colorObj', tagValue: colorObjectOptionFilter[0] };
    //   }
    //   setTagSelected([existingTagValue]);
    //   const tempselect = {
    //     subject: [],
    //     mood: [],
    //     decorStyle: [],
    //     artStyle: [],
    //     orientation: [],
    //     medium: [],
    //     colorObj: [],
    //   }
    //   console.log('existingTagValue', existingTagValue)
    //   setAllFilters({...tempselect,[existingTagValue.tagType]:[existingTagValue.tagValue]})
    // } else {
      setAllFilters({
        subject: [],
        mood: [],
        decorStyle: [],
        artStyle: [],
        orientation: [],
        medium: [],
        colorObj: [],
      });
      setTagSelected([]);
    // }
  };

  const handleMenuOpen = () => {
    if (window.scrollY >= 250) {
      setMenuOpen('');
    }
  };

  window.addEventListener('scroll', handleMenuOpen);
  /* -------------------------Remove Tag with Filter selected item remove----------------------*/
  const removeSelectedTag = (item) => {
    if (item.tagValue.toLowerCase() !== slugValue.toLowerCase()) {
      setRemoveTag(item);
      let tempRes = TagSelected.filter((i) => JSON.stringify(i) !== JSON.stringify(item));

      setIsRemoving(true);
      if (tempRes.length === 0) {
        setAllFilters({
          subject: [],
          mood: [],
          decorStyle: [],
          artStyle: [],
          orientation: [],
          medium: [],
          colorObj: [],
        });
        setTagSelected([]);
      } else {
        if (Object.keys(allFilters).length !== 0) {
          const newArr = allFilters[item.tagType].filter((object) => {
            return object !== item.tagValue;
          });
          setAllFilters({ ...allFilters, [item.tagType]: newArr });
          setTagSelected([...tempRes]);
        }
      }
    }
  };
  return (
    <Filterpopup isOpenFilter={isOpenFilter}>
      <div className="bg-transparent border-t border-b w-full">
        <FilterBackDiv onClick={() => setIsOpenFilter(false)}>
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.84411 0.288086L4.57129 1.01817L1.50632 3.90402L4.57129 6.78987L3.84411 7.51996L-0.000139236 3.90399L3.84411 0.288086Z"
              fill="black"
            />
          </svg>
          <FilterBack>Back</FilterBack>
        </FilterBackDiv>
        <div className="flex justify-between px-5 pb-6">
          <FilterBySpan>Filter BY</FilterBySpan>
          <ClearAllBtn
            onClick={() => handleClearAll()}
            tabIndex={0}
            onKeyDown={() => {}}
            role="button"
          >
            Clear All
          </ClearAllBtn>
        </div>
        <div className="bg-transparent flex container">
          <div className="flex flex-col w-full gap-y-4 justify-items-center">
            <FilterDropdown
              filterName="subject"
              setMenuOpen={setMenuOpen}
              filterType="subject"
              menuOpen={menuOpen}
              filterTitle="SUBJECT"
              options={subjectOption}
              setTagSelected={setTagSelected}
              TagSelected={TagSelected}
              setRemoveTag={setRemoveTag}
              slugValue={slugValue}
              count={allFilters.subject.length}
            />
            <HorizontalBorder />
            <FilterDropdown
              filterName="mood"
              setMenuOpen={setMenuOpen}
              filterType="mood"
              menuOpen={menuOpen}
              filterTitle="MOOD"
              options={moodOption}
              setTagSelected={setTagSelected}
              TagSelected={TagSelected}
              setRemoveTag={setRemoveTag}
              slugValue={slugValue}
              count={allFilters.mood.length}
            />
            <HorizontalBorder />
            <FilterDropdown
              filterName="colorObj"
              setMenuOpen={setMenuOpen}
              filterType="colorObj"
              menuOpen={menuOpen}
              filterTitle="COLOR"
              options={colorObject}
              setTagSelected={setTagSelected}
              TagSelected={TagSelected}
              setRemoveTag={setRemoveTag}
              slugValue={slugValue}
              count={allFilters.colorObj.length}
            />
            <HorizontalBorder />
            <FilterDropdown
              filterName="decorStyle"
              setMenuOpen={setMenuOpen}
              filterType="decorStyle"
              menuOpen={menuOpen}
              filterTitle="DECOR STYLE"
              options={decorOption}
              setTagSelected={setTagSelected}
              TagSelected={TagSelected}
              setRemoveTag={setRemoveTag}
              slugValue={slugValue}
              count={allFilters.decorStyle.length}
            />
            <HorizontalBorder />
            <FilterDropdown
              filterName="artStyle"
              setMenuOpen={setMenuOpen}
              filterType="artStyle"
              menuOpen={menuOpen}
              filterTitle="ART STYLE"
              options={artOption}
              setRemoveTag={setRemoveTag}
              slugValue={slugValue}
              count={allFilters.artStyle.length}
            />
            <HorizontalBorder />
            <FilterDropdown
              filterName="orientation"
              setMenuOpen={setMenuOpen}
              filterType="orientation"
              menuOpen={menuOpen}
              filterTitle="ORIENTATION"
              options={orientationOption}
              setTagSelected={setTagSelected}
              TagSelected={TagSelected}
              setRemoveTag={setRemoveTag}
              slugValue={slugValue}
              count={allFilters.orientation.length}
            />
            <HorizontalBorder />
            <FilterDropdown
              filterName="medium"
              setMenuOpen={setMenuOpen}
              filterType="medium"
              menuOpen={menuOpen}
              filterTitle="MEDIUM"
              options={mediumOption}
              setTagSelected={setTagSelected}
              TagSelected={TagSelected}
              setRemoveTag={setRemoveTag}
              slugValue={slugValue}
              count={allFilters.medium.length}
            />
            <HorizontalBorder />
            <ApplyProductDiv onClick={() => setIsOpenFilter(false)}>
              APPLY {`(${products?.length} products)`}
            </ApplyProductDiv>
          </div>
        </div>
      </div>
    </Filterpopup>
  );
};
const Filterpopup = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1111;
  transition: 0.3s;
  top: 80px;
  overflow-y: scroll;
  @media (min-width: 768px) {
    display: none;
  }
`;
const FilterBack = styled.span`
  margin-left: 8px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.05em;
  font-family: 'GoodSans' !important;
  text-transform: uppercase;
  color: #000000;
`;
const FilterBackDiv = styled.div`
  padding: 16px 20px 25px;
  display: flex;
  align-items: center;
`;
const FilterBySpan = styled.span`
  display: flex;
  align-items: center
  font-size: 12px !!important;
  line-height: 18px;
  letter-spacing: 0.05em;
  font-family: 'GoodSans' !important;
  text-transform: uppercase;
  color: #000000;
`;
const ClearAllBtn = styled.span`
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-family: 'GoodSans' !important;
  text-transform: uppercase;
  text-decoration-line: underline;
  color: #000000;
`;
const HorizontalBorder = styled.div`
  border: 0.5px solid #e2dacd;
`;

const ApplyProductDiv = styled.div`
  background: #f1946a;
  font-family: 'GoodSans';
  font-size: 10px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding: 10px 0;
  margin: -16px 0 16px;
  text-transform: uppercase;
`;
export default MobileFilters;
