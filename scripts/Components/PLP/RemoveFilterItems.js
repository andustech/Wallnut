export const removeFilterItems = (
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
  RemoveTag
) => {
  let tempArr = [...allFilters[filterName]];
  tempArr = tempArr.includes(option)
    ? tempArr.filter((item) => item !== option)
    : [...tempArr, option];
  const styleAndChairTypeFilters = toggleFilters(
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
    RemoveTag
  );

  return styleAndChairTypeFilters;
};
