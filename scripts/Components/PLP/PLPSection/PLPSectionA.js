import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PLPItems from '../PLPItems';
import Filters from '../Filters';
import PLPDescription from '../PLPDescription';
import SeoCopy from '../SEOCopy';
import PLPContext from '../plpContext';
import FilterIcon from '../../Icons/filterIcon';
import algoliasearch from 'algoliasearch';
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
const PLPSection = ({ collectionTitle, collectionDescription }) => {
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
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(0);

  const filterRef = useRef();
  const [slugValue, setSlugValue] = useState('');
  const [slugRawValue, setSlugRawValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [isCalled, setIsCalled] = useState(false);
  const [isAllClearing, setIsClearing] = useState(false);
  const [indexName, setIndexName] = useState('shopify_products_title_asc');
  const [pageTitle, setPageTitle] = useState(collectionTitle);
  const [options, setOptions] = useState({
    artOption: artOption,
    colorObject: colorObject,
    decorStyle: decorOption,
    mediumOption: mediumOption,
    mood: moodOption,
    orientationOption: orientationOption,
    subject: subjectOption,
    sizeOption: sizeOption,
  });

  const resetOptions = {
    artOption: artOption,
    colorObject: colorObject,
    decorStyle: decorOption,
    mediumOption: mediumOption,
    mood: moodOption,
    orientationOption: orientationOption,
    subject: subjectOption,
    sizeOption: sizeOption,
  };

  const searchClient = algoliasearch('G49A2XSYO1', 'aac1fbe78febb9f003c18df8aba2eba1');
  const index = searchClient.initIndex(indexName);

  useEffect(() => {
    if (!isCalled) {
      setIsLoading(true);
      console.log('========', indexName);
      index
        .search('', {
          page: page,
          hitsPerPage: 16,
          filters: tags.length > 0 ? tags.join(' AND ') : '',
        })
        .then((res) => {
          setIsCalled(true);
          setProducts(res.hits);
          setTotalProducts(res.nbHits);
          setIsLoading(false);
        })
        .finally(() => {});
    }
    setIsCalled(true);
  }, [indexName]);

  const loadMore = () => {
    index
      .search('', {
        page: page + 1,
        hitsPerPage: 16,
        filters: tags.length > 0 ? tags.join(' AND ') : '',
      })
      .then((res) => {
        setProducts([...products, ...res.hits]);
        setTotalProducts(res.nbHits);
        setPage(page + 1);
      })
      .catch((e) => console.log('=======e=====', e))
      .finally(() => {});
  };

  useEffect(() => {
    FilterProducts();
  }, [allFilters, sortingApply, products, slugValue]);

  useEffect(() => {
    const tempTags = [];
    Object.keys(allFilters).forEach((k, indx) => {
      let fltrStr = '';
      if (allFilters[k].length !== 0) {
        const filterName =
          k === 'decorStyle'
            ? 'Décor Style'
            : k === 'artStyle'
            ? 'Art Style'
            : k === 'colorObj'
            ? 'Color'
            : k.charAt(0).toUpperCase() + k.slice(1);
        allFilters[k].forEach((itm, index) => {
          if(k === 'orientation' || k === 'medium'){
            if (index === allFilters[k].length - 1) {
              fltrStr += "tags:'" + itm + "'";
            } else {
              fltrStr += "tags:'" + itm + "'%";
            }
          }
          else {
            if (index === allFilters[k].length - 1) {
              fltrStr += "tags:'" + filterName + '-' + itm + "'";
            } else {
              fltrStr += "tags:'" + filterName + '-' + itm + "'%";
            }
          }
        });
        fltrStr = fltrStr.replace(/%/g, ' OR ');
        fltrStr = '(' + fltrStr + ')';
        tempTags.push(fltrStr);
      }
    });
    setTags(tempTags);
    index
      .search('', {
        page: 0,
        hitsPerPage: 16,
        filters: tempTags.join(' AND '),
      })
      .then((res) => {
        setProducts(res.hits);
        setTotalProducts(res.nbHits);
        setIsLoading(false);
      })
      .catch((e) => console.log('=======e=====', e))
      .finally(() => {});
  }, [allFilters]);

  useEffect(() => {
    slugToSelectedFilterValue();
  }, [slugValue]);

  const camelize = (str) => {
    return str.replace(/\W+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    });
  };

  const slugToSelectedFilterValue = () => {
    let arr = window.location.pathname.split('/');
    let value = arr[arr.length - 1];
    setSlugRawValue(value);
    if (arr.length > 3) {
      setPageTitle(value.split('-').join(' ').replace('&', ' & '));

      let splitValue = value.split('-');
      if (splitValue.length > 1) {
        if (value.startsWith('decor-style')) {
          value = value.split('decor-style-')[1].split('-').join(' ');
          const tempOpt = resetOptions;
          tempOpt['decorStyle'] = resetOptions['decorStyle'].filter((i) => i.toLowerCase() !== value.toLowerCase())
          setAllFilters({ ...allFilters, ['decorStyle']: [value] });
          setOptions(tempOpt);
        } else {
          if (splitValue.length > 2) {
            value = splitValue.splice(1);
            value = value.join(' ');
            const tempOpt = resetOptions;
            tempOpt[splitValue[0]] = resetOptions[splitValue[0]].filter((i) => i !== value)
            setAllFilters({ ...allFilters, [splitValue[0]]: [value] });
            setOptions(tempOpt);
          } else {
            value = splitValue[1];
            const fltrType = splitValue[0];
            const fltrName = splitValue[1].charAt(0).toUpperCase() + splitValue[1].slice(1);
            setAllFilters({ ...allFilters, [fltrType]: [fltrName] });
            const tempOpt = resetOptions;
            if(fltrName.includes('&')){
              tempOpt[fltrType] = resetOptions[fltrType].filter((i) => i !== fltrName);
            }else{
              tempOpt[fltrType] = resetOptions[fltrType].filter((i) => i !== camelize(fltrName));
            }
            setOptions(tempOpt);
          }
        }
      } else {
        value = splitValue[0];
      }

      if (value !== '' && value !== undefined) {
        setSlugValue(value);
      }
    }
  };

  const FilterProducts = () => {
    var productFilter = [];
    if (checkFilters || sortingApply) {
      if (sortingApply === 'titleAscending' || sortingApply === '' || sortingApply === 'SORT BY') {
        setIndexName('shopify_products_title_asc');
        setIsCalled(false);
      }
      if (sortingApply === 'titleDescending') {
        setIndexName('shopify_products_title_desc');
        setIsCalled(false);
      }
      Object.keys(allFilters).map((element) => {
        a: for (let index1 = 0; index1 < allFilters[element].length; index1++) {
          const filterValue = allFilters[element][index1].replace('&', ' & ');
          const tempEntry = {
            tagType: element,
            tagValue: filterValue.replace('-', ' '),
          };
          let isInSlug = false;

          let arr = window.location.pathname.split('/');
          let value = arr[arr.length - 1];
          let splitValue = value.split('-');

          if (value.startsWith('decor-style') && element === 'decorStyle') {
            if (
              value.split('decor-style-')[1].split('-').join(' ').toLowerCase() ===
              tempEntry.tagValue.toLowerCase()
            ) {
              isInSlug = true;
            }
          } else if (splitValue[0].toLowerCase() === element) {
            if (splitValue.length > 2) {
              value = splitValue.splice(1);
              value = value.join(' ');
              if(allFilters[element][index1] === value){
                isInSlug = true;
              }
            }else{
              if (splitValue[1].toLowerCase() === tempEntry.tagValue.toLowerCase()) {
                isInSlug = true;
              }
            }
          }

          let tempRes = TagSelected.filter(
            (i) => i.tagType === tempEntry.tagType && i.tagValue === tempEntry.tagValue
          );
          if (isAllClearing) {
            setTagSelected([tempEntry]);
          }
          if (tempRes.length === 0 && !isRemoving && !isAllClearing && !isInSlug) {
            setTagSelected([...TagSelected, tempEntry]);
          }
        }
      });
    }
    setFilterProducts(productFilter);
    setIsRemoving(false);
    setIsClearing(false);
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
    if (isOpenFilter) {
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

  const contextValue = {
    allFilters,
    setAllFilters,
    checkFilters,
    setIsLoading,
    isLoading,
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
          totalProducts={totalProducts}
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
        </FilterMobile>
        <PLPDescription
          filterRef={filterRef}
          collectionTitle={pageTitle}
          {...{ collectionDescription }}
        />
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
            products={products}
            setIsRemoving={setIsRemoving}
            slugValue={slugValue}
            artOption={options.artOption}
            colorObject={options.colorObject}
            decorOption={options.decorStyle}
            mediumOption={options.mediumOption}
            moodOption={options.mood}
            orientationOption={options.orientationOption}
            subjectOption={options.subject}
            sizeOption={options.sizeOption}
            isRemoving={isRemoving}
            slugRawValue={slugRawValue}
            totalProducts={totalProducts}
            setIsClearing={setIsClearing}
          />
        </FiltersDesktop>
        {isLoading ? (
          <Loader>
            <div className="pre-spinner">
              <div className="spinner"></div>
            </div>
          </Loader>
        ) : products.length > 0 ? (
          <PLPItems
            products={products}
            collectionTitle={collectionTitle}
            colorFilters={[]}
            simpleLayout
            holiday={collectionTitle === 'Seasonal Favorites'}
            totalProducts={totalProducts}
            loadMore={loadMore}
          />
        ) : (
          <NotFound>
            <h4>No Products Found!!</h4>
          </NotFound>
        )}
        <SeoCopy title={collectionTitle} />
      </div>
    </PLPContext.Provider>
  );
};

const FiltersDesktop = styled.div`
  display: block;
  @media (max-width: 1199px) {
    display: none;
  }
`;
const NotFound = styled.div`
  text-align: center;
  margin-top: 125px;
`;
const Loader = styled.div`
  justify-content: center;
  display: flex;
  & .pre-spinner {
    width: 300px;
    height: 300px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    & .spinner {
      width: 75px;
      height: 75px;
      margin: 0;
      background: transparent;
      border-top: 4px solid black;
      border-right: 4px solid transparent;
      border-radius: 50%;
      -webkit-animation: 1s spin linear infinite;
      animation: 1s spin linear infinite;
    }
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
  @media (min-width: 1200px) {
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
};

export default PLPSection;
