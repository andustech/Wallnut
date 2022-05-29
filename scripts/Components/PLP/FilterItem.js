import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import Rectangle from '../Icons/Rectangle';
import plpContext from './plpContext';
import { removeFilterItems } from './RemoveFilterItems';

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
  medium,RemoveTag
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
      return { ...allFilters, size: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, size: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return {
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
      };
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
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, subject: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, subject: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return {
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
      };
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
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, mood: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, mood: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return {
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
      };
    }
    return { ...allFilters, subject: [...tempArr] };
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
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, decorStyle: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, decorStyle: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        artStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return {
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
      };
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
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, artStyle: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, artStyle: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return {
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
      };
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
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, orientation: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, orientation: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        artStyle === 0 &&
        medium === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return {
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
      };
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
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, medium: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, medium: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        size === 0 &&
        subject === 0 &&
        mood === 0 &&
        decorStyle === 0 &&
        orientation === 0 &&
        medium === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return {
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
      };
    }
    return { ...allFilters, medium: [...tempArr] };
  }

  if (filterName === 'style') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-style',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, style: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, style: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return { style: [], chairType: [], color: ['All'] };
    }
    return { ...allFilters, style: [...tempArr] };
  }

  if (filterName === 'chairType') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-chair-type',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (allFilters.color.length === 0) {
      return { ...allFilters, chairType: [...tempArr], color: ['All'] };
    }
    if (tempArr.length === 0 && style.length === 0 && color.includes('All')) {
      return { ...allFilters, chairType: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        style.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        style.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        style.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return { style: [], chairType: [], color: ['All'] };
    }
    return { ...allFilters, chairType: [...tempArr] };
  }

  // return '';
};

const FilterItem = ({ option, filterName, RemoveTag, setRemoveTag }) => {
  const { allFilters, setAllFilters } = useContext(plpContext);
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
  const [selected, setSelected] = useState(false);
  useEffect(()=>{
console.log('RemoveTag :>> ', RemoveTag);
    let option=RemoveTag?.tagValue
    let filterName= RemoveTag?.tagType
    if(RemoveTag?.tagValue&& RemoveTag?.tagValue){
    handleClick(option,filterName)}
  },[RemoveTag])
  const handleClick = (option,filterName) => {
 
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
      medium,RemoveTag
    );
    console.log('object :>> ', styleAndChairTypeFilters);
    // let tempArr = [...allFilters[filterName]];
    // tempArr = tempArr.includes(option)
    //   ? tempArr.filter((item) => item !== option)
    //   : [...tempArr, option];
    // const styleAndChairTypeFilters = toggleFilters(
    //   allFilters,
    //   filterName,
    //   tempArr,
    //   chairType,
    //   style,
    //   color,
    //   size,
    //   subject,
    //   mood,
    //   decorStyle,
    //   artStyle,
    //   orientation,
    //   medium
    // );

    setAllFilters(styleAndChairTypeFilters);
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
      className="cursor-pointer flex"
      onClick={()=>handleClick(option,filterName)}
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
    >
      <div className="self-center mr-2">
        <Rectangle fill={selected ? '#AC6433' : 'none'} />
      </div>
      <span>{option}</span>
    </div>
  );
};

FilterItem.propTypes = {
  option: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default FilterItem;
