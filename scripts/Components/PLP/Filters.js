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
  products,sortingApply,setSortingApply
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

  const sizeOption = ['18" x 24"', '24" x 32"', '30" x 40"', '32" x 44"'];
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
    if (
      window.location.href.includes('all') ||
      window.location.href.includes('pattern-chairs') ||
      window.location.href.includes('seasonal-favorites')
    ) {
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
      });
      setTagSelected([]);
    } else {
      setAllFilters({
        style: [],
        chairType: [],
        color: ['All'],
        size: [],
        subject: [],
        mood: [],
        decorStyle: [],
        artStyle: [],
        orientation: [],
        medium: [],
      });
      setTagSelected([]);
    }
  };

  const handleMenuOpen = () => {
    if (window.scrollY >= 250) {
      setMenuOpen('');
    }
  };

  window.addEventListener('scroll', handleMenuOpen);
  const removeSelectedTag = (item, index) => {
    // console.log('TagSelected :>> ', filterRemoveValue,TagSelected,tempEntry);
    setRemoveTag(item);
    let tempRes = TagSelected;
    tempRes.splice(index, 1);
    console.log('tempRes :>>> ', tempRes);
    setTagSelected([...tempRes]);
  };
  const sortingBy=(e)=>{
    // if(sortingApply){
    console.log('object :>> ', e.target.value);
    // }
    setSortingApply(e.target.value)
  }
  return (
    <>
      {stickyFilter && <SpaceHolder />}
      <Content id="filters" {...{ stickyFilter }}>
        <div className="bg-transparent border-t-2 border-b-2 w-full">
          <div className="bg-transparent flex max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 gap-y-4 md:flex py-4.5 md:pl-8 mx-auto md:mx-0 justify-items-center">
              <FilterDropdown
                filterName="size"
                setMenuOpen={setMenuOpen}
                filterType="size"
                menuOpen={menuOpen}
                filterTitle="SIZE"
                options={sizeOption}
                setTagSelected={setTagSelected}
                TagSelected={TagSelected}
                RemoveTag={RemoveTag}
                setRemoveTag={setRemoveTag}
              />
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
              {/* <FilterDropdown
                filterName="color"
                setMenuOpen={setMenuOpen}
                filterType="colorpicker"
                menuOpen={menuOpen}
                colorFilters={colorFilters}
                filterTitle="Color"
                colors={colors}
                collectionTitle={collectionTitle}
                setTagSelected={setTagSelected}
                TagSelected={TagSelected}
                setRemoveTag={setRemoveTag}
              /> */}
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
               {/* <FilterDropdown
                filterName="sortBy"
                setMenuOpen={setMenuOpen}
                filterType="sortBy"
                menuOpen={menuOpen}
                filterTitle="SORT BY"
                options={['Title Ascending','Title Descending']}
                setTagSelected={setTagSelected}
                TagSelected={TagSelected}
                setRemoveTag={setRemoveTag}
                sortingApply={sortingApply} 
                setSortingApply={setSortingApply}
              /> */}
              
              <select name='sortBy' onChange={(e)=>sortingBy(e)}
               >
              {/* <option value="priceAscending">Price Ascending</option>
              <option value="priceDescending">Price Descending</option> */}
              <option >SORT BY</option>

              <option value="titleAscending">Title Ascending</option>
              <option value="titleDescending">Title Descending</option>

              </select>
              
            </div>
          </div>
        </div>
        {checkFilters && (
          <div
            class="bg-transparent border-b-2 w-full"
            style={{
              border: '0.5px solid #E2DACD',
              // transform: rotate('-0.04deg'),
            }}
          >
            <div class="bg-transparent flex max-w-screen-2xl mx-auto">
              <div
                class="grid grid-cols-2 gap-y-4 md:flex py-4.5 md:pl-8 mx-auto md:mx-0 justify-items-center"
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
              >
                {' '}
                <div>
                  <Text>
                    {products.length} Products|{' '}
                    {TagSelected.map((items, index) => (
                      <Tag key={index}>
                        {' '}
                        <p>{items.tagValue}</p>{' '}
                        <div className="svg-icon" onClick={() => removeSelectedTag(items, index)}>
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
                <div style={{ paddingRight: '67px' }}>
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
                    <div className="relative bg-lynxwhite w-20 hidden md:block">
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute font-serif left-1/2 text-base text-center top-1/2 transform underline w-20"
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

const Content = styled.div(({ stickyFilter }) => [
  stickyFilter && tw`fixed w-screen z-1 top-14 lg:top-18`,
]);

const SpaceHolder = styled.div(() => [`height: 63.27px`]);
const Text = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.7);
  padding-right: 32px;
`;
const Tag = styled.div`
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  color: #000000;
  align-items: center;
  p {
    margin-bottom: 0px !important;
  }
  .svg-icon {
    padding-left: 17px;
    cursor: pointer;
  }
`;
export default Filters;
