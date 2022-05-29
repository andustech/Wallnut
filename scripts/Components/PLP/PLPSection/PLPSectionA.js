import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';
import PLPItems from '../PLPItems';
import Filters from '../Filters';
import PLPDescription from '../PLPDescription';
import SeoCopy from '../SEOCopy';
import PLPContext from '../plpContext';
import { mergedFetchedRecommendations } from '../../../utils';

const PLPSection = ({ collectionTitle, collectionDescription, products }) => {
  const [colors, setColors] = useState();
  const [stickyFilter, setStickyFilter] = useState(false);
  const [colorFilters, setColorFilters] = useState([]);
  const [chairTypes, setChairTypes] = useState([]);
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
  });
  const [sortingApply, setSortingApply] = useState('');
  const [filterProducts, setFilterProducts] = useState([]);
  const checkFilters = Object.values(allFilters).some((filter) => filter.length > 0);
  const [TagSelected, setTagSelected] = useState([]);
  const filterRef = useRef();

  useEffect(() => {
    FilterProducts();
  }, [allFilters, sortingApply]);
  const FilterProducts = () => {
    var productFilter = [];
    let newProducts = products;
    
    if (checkFilters || sortingApply) {

      // if (sortingApply === 'priceAscending') {
      //   productFilter = newProducts.sort(function (a, b) {
      //     return a.price - b.price;
      //   });
      // } else if (sortingApply === 'priceDescending') {
      //   productFilter = newProducts.sort(function (a, b) {
      //     return b.price - a.price;
      //   });
      // } else

      if (sortingApply === 'titleAscending' ||sortingApply === '' ) {
       
        productFilter = newProducts.sort(function (a, b) {
          var nameA = a.title // ignore upper and lowercase
          var nameB = b.title // ignore upper and lowercase
          if (nameA > nameB) {
            return 1;
          }
          if (nameA < nameB) {
            return -1;
          }
          // names must be equal
          return 0;
        });
       

      } else if (sortingApply === 'titleDescending') {
        
        productFilter = newProducts.sort(function (a, b) {
          var nameA = a.title // ignore upper and lowercase
          var nameB = b.title // ignore upper and lowercase
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

      for (let index = 0; index < newProducts.length; index++) {
        const productElement = newProducts[index];
        Object.keys(allFilters).map((element, index) => {
          a: for (let index = 0; index < allFilters[element].length; index++) {
            const filterValue = allFilters[element][index];
            const tempEntry = {
              tagType: element,
              tagValue: filterValue,
            };
            if (!TagSelected.includes(tempEntry)) {
              setTagSelected([...TagSelected, tempEntry]);
            }

            if (allFilters['size'].length !== 0 && element === 'size') {
              c: for (let index = 0; index < productElement.variants.length; index++) {
                const varientElement = productElement.variants[index];
                {
                  d: for (let index = 0; index < varientElement.options.length; index++) {
                    const varientValue = varientElement.options[index];
                    if (filterValue.localeCompare(varientValue)) {
                      if (productFilter.length === 0) {
                        productFilter.push(productElement);
                      } else {
                        let findValue = productFilter.filter((i) => i.id === productElement.id);
                        if (findValue.length == 0) {
                          productFilter.push(productElement);
                        }
                      }
                    }
                    break;
                  }
                  break;
                }
              }
            }
            if (
              (allFilters['subject'].length !== 0 && element === 'subject') ||
              (allFilters['mood'].length !== 0 && element === 'mood') ||
              (allFilters['decorStyle'].length !== 0 && element === 'decorStyle') ||
              (allFilters['artStyle'].length !== 0 && element === 'artStyle') ||
              (allFilters['medium'].length !== 0 && element === 'medium')

              // (allFilters['color'].length !== 0 && element === 'color')
            ) {
              for (let index = 0; index < productElement.tags.length; index++) {
                const elementTags = productElement.tags[index];
                // productElement.tags.find(elementTags => {
                if (elementTags.includes(filterValue)) {
                  let findValue = productFilter.filter((i) => i.id === productElement.id);
                  if (findValue.length == 0) {
                    productFilter.push(productElement);
                  }
                }
              }
            }
          }
        });
      }
    }
    setFilterProducts(productFilter);
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

  return (
    <PLPContext.Provider value={contextValue}>
      <div className="w-full">
        <PLPDescription filterRef={filterRef} {...{ collectionTitle, collectionDescription }} />
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
        />
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

  return (
    <PLPContext.Provider value={contextValue}>
      <div className="w-full">
        <PLPDescription filterRef={filterRef} {...{ collectionTitle, collectionDescription }} />
        <PLPItems
          products={combinedProducts}
          collectionTitle={collectionTitle}
          colorFilters={colorFilters}
        />
        <SeoCopy title={collectionTitle} />
      </div>
    </PLPContext.Provider>
  );
};

PLPSection.defaultProps = {
  collectionDescription:
    'Our washable chairs come in a wide variety of colors. If you’re wondering which chair color perfectly complements your room theme, look no further. Here we give you a host of options, plus some tips on how to choose the perfect chair color for you.',
};

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
