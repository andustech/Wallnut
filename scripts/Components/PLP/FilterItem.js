import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import Rectangle from '../Icons/Rectangle';
import plpContext from './plpContext';
import { removeFilterItems } from './RemoveFilterItems';
import styled from 'styled-components';

const toggleFilters = (
  allFilters,
  filterName,
  tempArr,
  chairType,
  style,
  color,
  size,
  subject,
  mood,
  decorStyle,
  artStyle,
  orientation,
  medium,
  RemoveTag,
  colorObj
) => {
  // Filter SIZE
  if (filterName === 'size') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-size',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, size: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, size: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, size: [...tempArr] };
    }
    return { ...allFilters, size: [...tempArr] };
  }
  // Filter SUBJECT
  if (filterName === 'subject') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-subject',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, subject: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, subject: [...tempArr] };
    }
    return { ...allFilters, subject: [...tempArr] };
  }
  // Filter MOOD
  if (filterName === 'mood') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-mood',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, mood: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, mood: [...tempArr] };
    }
    return { ...allFilters, mood: [...tempArr] };
  }
  // Filter DECOR
  if (filterName === 'decorStyle') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-decor',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, decorStyle: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, decorStyle: [...tempArr] };
    }
    return { ...allFilters, decorStyle: [...tempArr] };
  }
  // Filter ART
  if (filterName === 'artStyle') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-art',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, artStyle: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, artStyle: [...tempArr] };
    }
    return { ...allFilters, artStyle: [...tempArr] };
  }
  // Filter ORIENTATION
  if (filterName === 'orientation') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-orientation',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, orientation: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, orientation: [...tempArr] };
    }
    return { ...allFilters, orientation: [...tempArr] };
  }
  // Filter MEDIUM
  if (filterName === 'medium') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-medium',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, medium: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        colorObj === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, medium: [...tempArr] };
    }
    return { ...allFilters, medium: [...tempArr] };
  }
  // Filter COLOR
  if (filterName === 'colorObj') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-colorObj',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (allFilters.colorObj.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, colorObj: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, colorObj: [...tempArr] };
    }
    if (
      (tempArr.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 && !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 && !window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, colorObj: [...tempArr] };
    }
    return { ...allFilters, colorObj: [...tempArr] };
  }

  // return '';
};

const FilterItem = ({ option, filterName, RemoveTag, setRemoveTag, setMenuOpen, slugValue }) => {
  const { allFilters, setAllFilters, setIsLoading } = useContext(plpContext);
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
  const [selected, setSelected] = useState(false);

  const handleClick = (option, filterName) => {
    const styleAndChairTypeFilters = removeFilterItems(
      allFilters,
      filterName,
      toggleFilters,
      option,
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
      RemoveTag,
      colorObj
    );

    let isInSlug = false;

    let arr = window.location.pathname.split('/');
    let value = arr[arr.length - 1];
    let splitValue = value.split('-');
    if (splitValue.length > 1) {
      if (value.startsWith('decor-style') && value.split('decor-style-')[1].split('-').join(' ').toLowerCase() === option.toLowerCase()) {
        isInSlug = true;
      } else if(!value.startsWith('decor-style')){
        if (splitValue.length > 2 && splitValue.splice(1).join(' ').toLocaleLowerCase() === option.toLowerCase()) {
          isInSlug = true;
        } else if (splitValue[1].toLocaleLowerCase() === option.toLowerCase()) {
          isInSlug = true;
        }
      }
    }

    if (!isInSlug) {
      setIsLoading(true)
      const selectOption = { tagType: filterName, tagValue: option };
      setRemoveTag(selectOption);
      let tag = document.getElementById(option.replace('&', ' & ') + '-' + filterName);
      console.log('option,filterName', option, filterName);
      if (tag) {
        tag.click();
        setMenuOpen(filterName);
      }
      setAllFilters(styleAndChairTypeFilters);
    }
  };

  useEffect(() => {
    if (allFilters[filterName]?.includes(option)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [allFilters, filterName, option]);

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        // if (slugValue.toLowerCase() !== option.toLowerCase()) {
        handleClick(option, filterName);
        // }
      }}
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <div className="self-center mr-3 align-items-centner">
        <Rectangle fill={selected ? '#000' : 'none'} />
      </div>
      <FilterOptions>{option.replace('&', ' & ')}</FilterOptions>
    </div>
  );
};

FilterItem.propTypes = {
  option: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
};

const FilterOptions = styled.span`
  font-family: 'GoodSans';
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.05em;
  align-items:center @media (max-width: 767px) {
    letter-spacing: -0.01em;
    line-height: 16px;
  }
`;

export default FilterItem;
