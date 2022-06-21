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
import algoliasearch from 'algoliasearch/lite';
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

  const searchClient = algoliasearch('G49A2XSYO1', 'aac1fbe78febb9f003c18df8aba2eba1');
  const index = searchClient.initIndex(indexName);

  useEffect(() => {
    if (!isCalled) {
      setIsLoading(true);
      index
        .search('', {
          page: page,
          hitsPerPage: 16,
          facetFilters: tags,
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
        facetFilters: tags,
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
    console.log('=======', allFilters);
    const tempTags = [];
    Object.keys(allFilters).forEach((k) => {
      if (allFilters[k].length !== 0) {
        const filterName =
          k === 'decorStyle'
            ? 'Décor Style'
            : k === 'artStyle'
            ? 'Art Style'
            : k === 'colorObj'
            ? 'Color'
            : k.charAt(0).toUpperCase() + k.slice(1);
        allFilters[k].forEach((itm) => {
          if (k === 'subject') {
            tempTags.push('tags:Abstract-' + itm);
          } else {
            tempTags.push('tags:' + filterName + '-' + itm);
          }
        });
      }
    });
    console.log('tempTags === ', tempTags);
    setTags(tempTags);
    index
      .search('', {
        page: 0,
        hitsPerPage: 16,
        facetFilters: tempTags,
      })
      .then((res) => {
        setProducts(res.hits);
        setTotalProducts(res.nbHits);
        setIsLoading(false)
      })
      .catch((e) => console.log('=======e=====', e))
      .finally(() => {});
  }, [allFilters]);

  useEffect(() => {
    slugToSelectedFilterValue();
  }, [slugValue]);

  const slugToSelectedFilterValue = () => {
    let arr = window.location.pathname.split('/');
    let value = arr[arr.length - 1];
    setSlugRawValue(value);
    let splitValue = value.split('-');
    if (splitValue.length > 1) {
      if (value.startsWith('decor-style')) {
        value = value.split('decor-style-')[1].split('-').join(' ');
        setAllFilters({ ...allFilters, ['decorStyle']: [value] });
      } else {
        if (splitValue.length > 2) {
          value = splitValue.splice(1);
          value = value.join(' ');
          const fltrType = splitValue[0].charAt(0).toUpperCase() + splitValue[0].slice(1);
          setAllFilters({ ...allFilters, [splitValue[0]]: [value] });
        } else {
          value = splitValue[1];
          const fltrType = splitValue[0];
          const fltrName = splitValue[1].charAt(0).toUpperCase() + splitValue[1].slice(1);
          setAllFilters({ ...allFilters, [fltrType]: [fltrName] });
        }
      }
    } else {
      value = splitValue[0];
    }

    if (value !== '' && value !== undefined) {
      setSlugValue(value);
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
          console.log('tempEntry', tempEntry);
          let tempRes = TagSelected.filter(
            (i) => i.tagType === tempEntry.tagType && i.tagValue === tempEntry.tagValue
          );
          if (isAllClearing) {
            setTagSelected([tempEntry]);
          }
          if (tempRes.length === 0 && !isRemoving && !isAllClearing) {
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
    if (isOpenFilter && document.body.clientWidth > 767) {
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
    setIsLoading,
    isLoading
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
            products={products}
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
  @media (max-width: 767px) {
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
};

export default PLPSection;
