import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import FilterDropdown from './FilterDropdown';
import plpContext from './plpContext';

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
  } = allFilters;
  const [menuOpen, setMenuOpen] = useState('');
  const [RemoveTag, setRemoveTag] = useState({});

  const subjectOption = [
    'Abstract',
    'Animals',
    'Beach',
    'Desert',
    'Fashion',
    'Floral & Botanical',
    'Geometric',
    'Landscapes',
    'Nature',
    'People',
    'Sports',
    'Still Life',
    'Travel & Architecture',
    'Water',
  ];
  const moodOption = [
    'Moody',
    'Joyful',
    'Soothing',
    'Courageous',
    'Romantic',
    'Nostalgic',
    'Fantasy',
    'Uplifting',
    'Pensive',
  ];
  const decorOption = [
    'Mid Century Modern',
    'Contemporary',
    'Farmhouse',
    'Bohemian',
    'Scandinavian',
    'Coastal',
    'Industrial',
    'Vintage',
    'Glam',
    'Modern',
    'Art Deco',
    'Traditional',
    'Post Modern',
  ];
  const artOption = [
    'Abstract',
    'Modern',
    'Impressionist',
    'Minimalist ',
    'Maximalist',
    'Photography',
    'Typography',
    'Folk',
    'Realism',
    'Infographics & Posters',
    'Surrealist',
    'Collage',
    'Landscape',
    'Retro',
    'Pop-Art',
  ];
  const mediumOption = ['Drawing', 'Mixed Media', 'Photography', 'Graphic', 'Painting'];
  const orientationOption = ['Horizontal', 'Vertical'];

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
      setAllFilters({
        subject: [],
        mood: [],
        decorStyle: [],
        artStyle: [],
        orientation: [],
        medium: [],
      });
      setTagSelected([]);
  };

  const handleMenuOpen = () => {
    if (window.scrollY >= 250) {
      setMenuOpen('');
    }
  };

  window.addEventListener('scroll', handleMenuOpen);
  /* -------------------------Remove Tag with Filter selected item remove----------------------*/
  const removeSelectedTag = (item) => {
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
                />
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
                />
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
                />
                <FilterDropdown
                  filterName="artStyle"
                  setMenuOpen={setMenuOpen}
                  filterType="artStyle"
                  menuOpen={menuOpen}
                  filterTitle="ART STYLE"
                  options={artOption}
                  setRemoveTag={setRemoveTag}
                />
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
                />
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
                />
              </div>
              <div className="flex items-center">
                <select id="sortbyDropdown" name="sortBy" onChange={(e) => sortingBy(e)}>
                  <option>SORT BY</option>
                  <option value="titleAscending">Ascending</option>
                  <option value="titleDescending">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {checkFilters && (
          <div className="bg-transparent border-b w-full">
            <div className="bg-transparent container">
              <div
                className="py-5 justify-items-center flex flex-row"
                style={{ justifyContent: 'space-between' }}
              >
                {' '}
                <div>
                  <Text>
                    <ProductSpan>{products.length} Products</ProductSpan>
                    {TagSelected.map((items, index) => (
                      <Tag key={index}>
                        {' '}
                        <p>{items.tagValue}</p>{' '}
                        <div
                          className="svg-icon"
                          id={items.tagValue}
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
                              fill-rule="evenodd"
                              clip-rule="evenodd"
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
                  {(checkFilters && window.location.href.includes('all')) ||
                  (checkFilters && window.location.href.includes('pattern-chairs')) ||
                  (checkFilters && window.location.href.includes('seasonal-favorites')) ||
                  // style.length > 0 ||
                  size?.length < 0 ||
                  mood?.length < 0 ||
                  subject?.length < 0 ||
                  artStyle?.length < 0 ||
                  decorStyle?.length < 0 ||
                  orientation?.length < 0 ||
                  medium?.length < 0 ||
                  chairType?.length < 0 ||
                  (!color?.includes('All') &&
                    !window.location.href.includes('all') &&
                    !window.location.href.includes('pattern-chairs') &&
                    !window.location.href.includes('seasonal-favorites')) ? (
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
                  {(checkFilters && window.location.href.includes('all')) ||
                  (checkFilters && window.location.href.includes('pattern-chairs')) ||
                  (checkFilters && window.location.href.includes('seasonal-favorites')) ||
                  // style.length > 0 ||
                  size?.length < 0 ||
                  mood?.length < 0 ||
                  subject?.length < 0 ||
                  artStyle?.length < 0 ||
                  decorStyle?.length < 0 ||
                  orientation?.length < 0 ||
                  medium?.length < 0 ||
                  chairType?.length < 0 ||
                  (!color?.includes('All') &&
                    !window.location.href.includes('all') &&
                    !window.location.href.includes('pattern-chairs') &&
                    !window.location.href.includes('seasonal-favorites')) ? (
                    <div className="bg-white w-full md:hidden">
                      <div
                        className="bg-white pl-4 font-serif text-base underline"
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
  padding-right: 16px;
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
export default Filters;
