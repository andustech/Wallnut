import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import FilterDropdown from './FilterDropdown';
import plpContext from './plpContext';
import { MenuIcon } from '../Icons';

const Filters = ({
  stickyFilter,
  colorFilters,
  colors = [],
  chairTypes,
  collectionTitle,
  setTagSelected,
  TagSelected,
  setIsRemoving,
  products,
  sortingApply,
  setSortingApply,
  slugValue,
  artOption,
  colorObject,
  decorOption,
  mediumOption,
  moodOption,
  orientationOption,
  subjectOption,
  isRemoving,
  sizeOption,
  slugRawValue,
  totalProducts,
  setIsClearing,
}) => {
  const { allFilters, setAllFilters, checkFilters, isLoading } = useContext(plpContext);
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
  const [sortingDropdownToggle, setSortingDropdownToggle] = useState(false);
  useEffect(() => {
    // slugValueFindInfilter();
  }, [slugValue]);

  const slugValueFindInfilter = () => {
    let filterName = '';
    let subjectFilter = subjectOption.filter((i) => i.toLowerCase() === slugValue.toLowerCase());
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

    // const tempEntry = {
    //   tagType: filterName,
    //   tagValue: slugValue.substring(0, 1).toUpperCase() + slugValue.substring(1),
    //   // .replace('&', ' & '),
    // };
    // let tempRes = TagSelected.filter(
    //   (i) => i.tagType === tempEntry.tagType && i.tagValue === tempEntry.tagValue
    // );
    if (
      // tempRes.length === 0 &&
      // !isRemoving &&
      // tempEntry.tagType !== '' &&
      // tempEntry.tagValue !== ''
      filterName !== ''
    ) {
      // setTagSelected([...TagSelected, tempEntry]);

      if (filterName !== '') {
        const demo = {
          ...allFilters,
          [filterName]: [
            ...allFilters[filterName],
            slugValue.substring(0, 1).toUpperCase() + slugValue.substring(1),
          ],
        };
        console.log('demo :>> ', demo);
        setAllFilters(demo);
      }
    }
    // setAllFilters({ ...tempArr, slugValue });
  };
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

  const handleClearAll = () => {
    const tempselect = {
      subject: [],
      mood: [],
      decorStyle: [],
      artStyle: [],
      orientation: [],
      medium: [],
      colorObj: [],
    };

    // let arr = window.location.pathname.split('/');
    // let value = arr[arr.length - 1];
    // let splitValue = value.split('-');
    // if (splitValue.length > 1) {
    //   if (value.startsWith('decor-style')) {
    //     value = value.split('decor-style-')[1].split('-').join(' ');
    //     tempselect['decorStyle'] = [value];
    //   } else {
    //     if (splitValue.length > 2) {
    //       value = splitValue.splice(1);
    //       value = value.join(' ');
    //       const fltrType = splitValue[0].charAt(0).toUpperCase() + splitValue[0].slice(1);
    //       tempselect[splitValue[0]] = [value];
    //     } else {
    //       value = splitValue[1];
    //       const fltrType = splitValue[0];
    //       const fltrName = splitValue[1].charAt(0).toUpperCase() + splitValue[1].slice(1);
    //       tempselect[fltrType] = [fltrName];
    //     }
    //   }
    // } else {
    //   value = splitValue[0];
    // }

    // console.log('tempselect', tempselect);
    setIsClearing(true);
    setAllFilters(tempselect);
    // } else {
    //   setAllFilters({
    //     subject: [],
    //     mood: [],
    //     decorStyle: [],
    //     artStyle: [],
    //     orientation: [],
    //     medium: [],
    //     colorObj: [],
    //   });
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
    // if (item.tagValue.toLowerCase() !== slugValue.toLowerCase()) {
      console.log('++++',item)
    let isInSlug = false;
    let arr = window.location.pathname.split('/');
    let value = arr[arr.length - 1];
    let splitValue = value.split('-');
    if (splitValue.length > 1) {
      if (
        value.startsWith('decor-style') &&
        value.split('decor-style-')[1].split('-').join(' ').toLowerCase() === item.tagValue.toLowerCase()
      ) {
        isInSlug = true;
      } else if (!value.startsWith('decor-style')) {
        if (
          splitValue.length > 2 &&
          splitValue.splice(1).join(' ').toLocaleLowerCase() === item.tagValue.toLowerCase()
        ) {
          isInSlug = true;
        } else if (splitValue[1].toLocaleLowerCase() === item.tagValue.toLowerCase()) {
          isInSlug = true;
        }
      }
    }
    // if (!isInSlug) {
      setRemoveTag(item);
      let tempRes = TagSelected.filter((i) => JSON.stringify(i) !== JSON.stringify(item));

      setIsRemoving(true);
      if (tempRes.length === 0) {
        setAllFilters({
          style: [],
          chairType: [],
          color: [],
          size: [],
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
          console.log('+++++------+++',allFilters[item.tagType],'----')
          const newArr = allFilters[item.tagType].filter((object) =>  {
            console.log('+++++------+++',object.toLowerCase(), item.tagValue.replace(' & ','&').toLowerCase())
            if(object.toLowerCase() !== item.tagValue.replace(' & ','&').toLowerCase()){
              return object
            }});
          setAllFilters({ ...allFilters, [item.tagType]: newArr });
          setTagSelected([...tempRes]);
        }
      }
    // }
    // }
  };
  const sortingBy = (e) => {
    setSortingApply(e.target.value);
  };
  return (
    <>
      {stickyFilter && <SpaceHolder />}
      <Content id="filters" {...{ stickyFilter }}>
        <div className="bg-transparent border-t border-b w-full">
          <div className="bg-transparent flex container">
            <div className="flex justify-between w-full">
              <div className="grid grid-cols-2 gap-y-4 md:flex py-5 justify-items-center">
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
                />
                <VerticalBorder />
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
                />
                <VerticalBorder />
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
                />
                <VerticalBorder />
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
                />
                <VerticalBorder />
                <FilterDropdown
                  filterName="artStyle"
                  setMenuOpen={setMenuOpen}
                  filterType="artStyle"
                  menuOpen={menuOpen}
                  filterTitle="ART STYLE"
                  options={artOption}
                  setRemoveTag={setRemoveTag}
                  slugValue={slugValue}
                />
                <VerticalBorder />
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
                />
                <VerticalBorder />
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
                />
              </div>
              <div
                className="items-center cursor-pointer"
                style={{ position: 'relative', display: 'flex' }}
              >
                <SortDropDown
                  id="sortbyDropdown"
                  name="sortBy"
                  onChange={(e) => sortingBy(e)}
                  onClick={() => setSortingDropdownToggle(!sortingDropdownToggle)}
                >
                  <option>SORT BY</option>
                  <option value="titleAscending">Ascending</option>
                  <option value="titleDescending">Descending</option>
                </SortDropDown>
                <IconContainer flip={sortingDropdownToggle}>
                  <MenuIcon />
                </IconContainer>
              </div>
            </div>
          </div>
        </div>
        {checkFilters && !isLoading && (
          <div className="bg-transparent border-b w-full">
            <div className="bg-transparent container">
              <div
                className="py-5 justify-items-center flex flex-row"
                style={{ justifyContent: 'space-between' }}
              >
                {' '}
                <div>
                  <Text>
                    <ProductSpan>{totalProducts} Products</ProductSpan>
                    {TagSelected.map((items, index) => (
                      <Tag key={index}>
                        {' '}
                        <p>{items.tagValue}</p>{' '}
                        <div
                          className="svg-icon"
                          id={items.tagValue + '-' + items.tagType}
                          onClick={() => removeSelectedTag(items)}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.162507 0.162507C0.379876 -0.0541689 0.731253 -0.0541689 0.948622 0.162507L5 4.2146L9.05138 0.162507C9.26875 -0.0541689 9.62012 -0.0541689 9.83749 0.162507C10.0542 0.379876 10.0542 0.731253 9.83749 0.948622L5.7854 5L9.83749 9.05138C10.0542 9.26875 10.0542 9.62012 9.83749 9.83749C9.62012 10.0542 9.26875 10.0542 9.05138 9.83749L5 5.7854L0.948622 9.83749C0.731253 10.0542 0.379876 10.0542 0.162507 9.83749C-0.0541689 9.62012 -0.0541689 9.26875 0.162507 9.05138L4.2146 5L0.162507 0.948622C-0.0541689 0.731253 -0.0541689 0.379876 0.162507 0.162507Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </Tag>
                    ))}
                  </Text>
                </div>
                <div>
                  {size?.length > 0 ||
                  mood?.length > 0 ||
                  subject?.length > 0 ||
                  artStyle?.length > 0 ||
                  decorStyle?.length > 0 ||
                  orientation?.length > 0 ||
                  medium?.length > 0 ||
                  colorObj?.length > 0 ? (
                    <div className="hidden md:block">
                      <div
                        style={{
                          fontSize: '12px',
                          lineHeight: '20px',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                        className="underline"
                        onClick={() => handleClearAll()}
                        tabIndex={0}
                        onKeyDown={() => {}}
                        role="button"
                      >
                        Clear All
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Content>
    </>
  );
};

Filters.defaultProps = {
  colors: [],
};

Filters.propTypes = {
  chairTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  colorFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  stickyFilter: PropTypes.bool.isRequired,
  collectionTitle: PropTypes.string.isRequired,
};

const Content = styled.div.attrs({
  className: 'mt-14',
})``;

const SpaceHolder = styled.div(() => [`height: 63.27px`]);
const Text = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.7);
  padding-right: 32px;
  flex-wrap: wrap;
  row-gap: 12px;
`;
const Tag = styled.div`
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  color: #000000;
  align-items: center;
  p {
    margin-bottom: 0px !important;
    font-size: 14px !important;
    line-height: 18px !important;
  }
  .svg-icon {
    padding-left: 16px;
    cursor: pointer;
  }
`;
const ProductSpan = styled.span`
  white-space: pre;
  font-family: 'GoodSans-Light';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.7);
  padding-right: 16px;
  border-right: 1px solid #f4f2ec;
  margin-right: 16px;
`;
const VerticalBorder = styled.div`
  border-top: 1px solid #f4f2ec;
  width: 24px;
  height: 0px;
  transform: rotate(-90deg);
  position: relative;
  top: 8px;
  left: -7px;
`;
const SortDropDown = styled.select`
  padding-right: 20px;
  margin-bottom: 0 !important;
  cursor: pointer;
`;
const IconContainer = styled.div`
  transform: ${({ flip }) => (!flip ? 'rotate(0deg)' : 'rotate(180deg)')};
  position: absolute;
  z-index: -2;
  right: 0px !important;
  cursor: pointer;
`;
export default Filters;
