export const removeFilterItems = (
  allFilters,
  filterName,
  toggleFilters,
  option,
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
  let tempArr = [...allFilters[filterName]];
  tempArr = tempArr.includes(option)
  ? tempArr.map((item) => {
      if (item !== option) {
        return item;
      }
    })
  : [...tempArr, option];

  
  const styleAndChairTypeFilters = toggleFilters(
    allFilters,
    filterName,
    tempArr,
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

  return styleAndChairTypeFilters;
};
