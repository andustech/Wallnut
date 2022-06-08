import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PLPItems from '../PLPItems';
import Filters from '../Filters';
import PLPDescription from '../PLPDescription';
import SeoCopy from '../SEOCopy';
import PLPContext from '../plpContext';
import { mergedFetchedRecommendations } from '../../../utils';
import FilterIcon from '../../Icons/filterIcon';
import MobileFilters from '../MobileFilters';
import {
  artOption,
  colorObject,
  decorOption,
  mediumOption,
  moodOption,
  orientationOption,
  subjectOption,
  sizeOption,
} from '../FilterOptionValues';
import { MenuIcon } from '../../Icons';
const PLPSection = ({ collectionTitle, collectionDescription, products }) => {
  const [colors, setColors] = useState();
  const [stickyFilter, setStickyFilter] = useState(false);
  const [colorFilters, setColorFilters] = useState([]);
  const [chairTypes, setChairTypes] = useState([]);
  const [isRemoving, setIsRemoving] = useState(false);
  const [sortingDropdownToggle, setSortingDropdownToggle] = useState(false);

  const [allFilters, setAllFilters] = useState({
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
  const [sortingApply, setSortingApply] = useState('');
  const [filterProducts, setFilterProducts] = useState([]);
  const checkFilters = Object.values(allFilters).some((filter) => filter.length > 0);
  const [TagSelected, setTagSelected] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const filterRef = useRef();
  const [slugValue, setSlugValue] = useState('');
  const [slugRawValue,setSlugRawValue]=useState('')
  useEffect(() => {
    FilterProducts();
  }, [allFilters, sortingApply, products,slugValue]);
  useEffect(() => {
    slugToSelectedFilterValue();
  }, [slugValue]);
  const slugToSelectedFilterValue = () => {
    let arr = window.location.pathname.split('/');
    let value = arr[arr.length - 1];
    setSlugRawValue(value)
    let splitValue = value.split('-');
    if (splitValue.length > 1) {
      if (value.startsWith('decor-style')) {
        console.log('value', value);
        value = value.split('decor-style-')[1].split('-').join(' ');
        console.log('value', value);
      } else {
        if(splitValue.length>2){
          value= splitValue.splice(1)
          value= value.join(' ')
        }else
        {
          value = splitValue[1];
        }
      
      }
    } else {
      value = splitValue[0];
    }
    console.log('value', value);
    if (value !== '' && value !== undefined) {
      setSlugValue(value);
    }
  };
  const FilterProducts = () => {
    var productFilter = [];
    if (checkFilters || sortingApply) {
      if (sortingApply === 'titleAscending' || sortingApply === '' || sortingApply === 'SORT BY') {
        const tempItems = products.sort(function (a, b) {
          var nameA = a.title.toLowerCase(); // ignore upper and lowercase
          var nameB = b.title.toLowerCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return 1;
          }
          if (nameA < nameB) {
            return -1;
          }
          return 0;
        });
      }
      if (sortingApply === 'titleDescending') {
        productFilter = products.sort(function (a, b) {
          var nameA = a.title.toLowerCase(); // ignore upper and lowercase
          var nameB = b.title.toLowerCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
      }
      Object.keys(allFilters).map((element) => {
        a: for (let index1 = 0; index1 < allFilters[element].length; index1++) {
          const filterValue = allFilters[element][index1].replace('&', ' & ');
          const tempEntry = {
            tagType: element,
            tagValue: filterValue.replace('-',' '),
          };
          console.log('tempEntry',tempEntry)
          let tempRes = TagSelected.filter(
            (i) => i.tagType === tempEntry.tagType && i.tagValue === tempEntry.tagValue
          );
          if (tempRes.length === 0 && !isRemoving) {
            setTagSelected([...TagSelected, tempEntry]);
          }
          for (let index = 0; index < products.length; index++) {
            const productElement = products[index];

            if (
              (allFilters['subject'].length !== 0 && element === 'subject') ||
              (allFilters['mood'].length !== 0 && element === 'mood') ||
              (allFilters['decorStyle'].length !== 0 && element === 'decorStyle') ||
              (allFilters['artStyle'].length !== 0 && element === 'artStyle') ||
              (allFilters['medium'].length !== 0 && element === 'medium') ||
              (allFilters['orientation'].length !== 0 && element === 'orientation') ||
              (allFilters['colorObj'].length !== 0 && element === 'colorObj')
            ) {
              for (let index = 0; index < productElement.tags.length; index++) {
                const elementTags = productElement.tags[index];

                if (element === 'subject' && filterValue === 'Floral & Botanical') {
                  if (elementTags.includes('Subject-Floral&Botanical')) {
                    let findValue = productFilter.filter((i) => i.id === productElement.id);
                    if (findValue.length == 0) {
                      productFilter.push(productElement);
                    }
                  }
                } else if (element === 'subject' && filterValue === 'Travel & Architecture') {
                  if (elementTags.includes('Subject-Travel&Architecture')) {
                    let findValue = productFilter.filter((i) => i.id === productElement.id);
                    if (findValue.length == 0) {
                      productFilter.push(productElement);
                    }
                  }
                } else if (element === 'subject') {
                  if (elementTags.includes(`Subject-${filterValue}`)) {
                    let findValue = productFilter.filter((i) => i.id === productElement.id);
                    if (findValue.length == 0) {
                      productFilter.push(productElement);
                    }
                  }
                } else if (element === 'artStyle') {
                  if (elementTags.includes(`Art Style-${filterValue}`)) {
                    let findValue = productFilter.filter((i) => i.id === productElement.id);
                    if (findValue.length == 0) {
                      productFilter.push(productElement);
                    }
                  }
                } else if (element === 'colorObj') {
                  if (elementTags.includes(`Color-${filterValue}`)) {
                    let findValue = productFilter.filter((i) => i.id === productElement.id);
                    if (findValue.length == 0) {
                      productFilter.push(productElement);
                    }
                  }
                } else if (element === 'decorStyle') {
                  console.log('filterValue', filterValue)
                  if (elementTags.includes(`Décor Style-${filterValue}`)) {
                    let findValue = productFilter.filter((i) => i.id === productElement.id);
                    if (findValue.length == 0) {
                      productFilter.push(productElement);
                    }
                  }
                } else if (element === 'medium') {
                  if (elementTags.includes(filterValue)) {
                    let findValue = productFilter.filter((i) => i.id === productElement.id);
                    if (findValue.length == 0) {
                      productFilter.push(productElement);
                    }
                  }
                }
                // Default condition
                else if (elementTags.includes(filterValue)) {
                  let findValue = productFilter.filter((i) => i.id === productElement.id);
                  if (findValue.length == 0) {
                    productFilter.push(productElement);
                  }
                }
              }
            }
          }
        }
      });
    }
    setFilterProducts(productFilter);
    setIsRemoving(false);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterColors = urlParams.getAll('colors');
    if (filterColors.length > 0) {
      setColorFilters([...filterColors]);
    }
  }, []);

  useEffect(() => {
    document.body.querySelector('#content').classList.remove('row');
  }, []);

  useEffect(() => {
    if (isOpenFilter && document.body.clientWidth > 767 ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenFilter]);

  useEffect(() => {
    const productTypes = [];
    products.forEach((product) => {
      if (product.tags.includes('Dining') && !productTypes.includes('Dining')) {
        productTypes.push('Dining');
      }
      if (product.tags.includes('Lounge') && !productTypes.includes('Lounge')) {
        productTypes.push('Lounge');
      }
    });
    const tempArr = [];
    products.forEach((product) => {
      if (product.tags.includes('Classic') || product.tags.includes('Scandinavian')) {
        product.variants.forEach((variant) => {
          if (tempArr.includes(variant.options[0]) === false) {
            tempArr.push(variant.options[0]);
          }
        });
      }
    });
    setColors(tempArr);
    setChairTypes([...productTypes]);
  }, [products]);

  const combinedProducts = mergedFetchedRecommendations(checkFilters ? filterProducts : products);

  const contextValue = {
    allFilters,
    setAllFilters,
    checkFilters,
  };
  const sortingBy = (e) => {
    setSortingApply(e.target.value);
  };
  return (
    <PLPContext.Provider value={contextValue}>
      {isOpenFilter && (
        <MobileFilters
          setIsOpenFilter={setIsOpenFilter}
          isOpenFilter={isOpenFilter}
          products={filterProducts.length ? filterProducts : products}
          setTagSelected={setTagSelected}
          TagSelected={TagSelected}
          slugValue={slugValue}
        />
      )}
      <div className="w-full">
        <FilterMobile>
          <div className="flex items-center" onClick={() => setIsOpenFilter(true)}>
            <FilterSpan>FILTER</FilterSpan>
            <FilterIcon />
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
          {/* <select id="sortbyMobileDropdown" name="sortBy" onChange={(e) => sortingBy(e)}>
            <option>SORT BY</option>
            <option value="titleAscending">Ascending</option>
            <option value="titleDescending">Descending</option>
          </select> */}
        </FilterMobile>
        <PLPDescription filterRef={filterRef} {...{ collectionTitle, collectionDescription }} />
        <FiltersDesktop>
          <Filters
            colorFilters={colorFilters}
            setColorFilters={setColorFilters}
            stickyFilter={stickyFilter}
            colors={colors}
            chairTypes={chairTypes}
            collectionTitle={collectionTitle}
            setTagSelected={setTagSelected}
            TagSelected={TagSelected}
            setSortingApply={setSortingApply}
            sortingApply={sortingApply}
            products={combinedProducts}
            setIsRemoving={setIsRemoving}
            slugValue={slugValue}
            artOption={artOption}
            colorObject={colorObject}
            decorOption={decorOption}
            mediumOption={mediumOption}
            moodOption={moodOption}
            orientationOption={orientationOption}
            subjectOption={subjectOption}
            sizeOption={sizeOption}
            isRemoving={isRemoving}
            slugRawValue={slugRawValue}
          />
        </FiltersDesktop>
        <PLPItems
          products={combinedProducts}
          collectionTitle={collectionTitle}
          colorFilters={[]}
          simpleLayout
          holiday={collectionTitle === 'Seasonal Favorites'}
        />
        <SeoCopy title={collectionTitle} />
      </div>
    </PLPContext.Provider>
  );
};

const FiltersDesktop = styled.div`
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
`;
const FilterMobile = styled.div`
  display: flex;
  margin: 0 20px;
  border-bottom: 0.5px solid #e2dacd;
  justify-content: space-between;
  select {
    font-size: 10px;
    line-height: 18px;
    letter-spacing: 0.05em;
    font-family: 'GoodSans' !important;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const FilterSpan = styled.span`
  margin-right: 8px;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0.05em;
  font-family: 'GoodSans' !important;
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
PLPSection.defaultProps = {};

PLPSection.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  collectionDescription: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      featured_image: PropTypes.string,
      handle: PropTypes.string,
      id: PropTypes.number,
      options: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      price_max: PropTypes.number,
      price_min: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          featured_image: PropTypes.shape({
            alt: PropTypes.string,
            height: PropTypes.number,
            product_id: PropTypes.number,
            src: PropTypes.string,
            variant_ids: PropTypes.arrayOf(PropTypes.number),
            width: PropTypes.number,
          }),
          featured_media: PropTypes.shape({
            alt: PropTypes.string,
            id: PropTypes.number,
            position: PropTypes.number,
            preview_image: PropTypes.shape({
              aspect_ratio: PropTypes.number,
              height: PropTypes.number,
              src: PropTypes.string,
              width: PropTypes.number,
            }),
          }),
          id: PropTypes.number,
          name: PropTypes.string,
          option1: PropTypes.string,
          option2: PropTypes.string,
          option3: PropTypes.string,
          options: PropTypes.arrayOf(PropTypes.string),
          price: PropTypes.number,
          public_title: PropTypes.string,
          sku: PropTypes.string,
          taxable: PropTypes.bool,
          title: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default PLPSection;
