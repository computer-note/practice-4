export function isArrayPropEqualForNodeComponent(
  prevProps,
  curProps
) {
  return isArrayPropEqual(
    props => props.valueList,
    array => array.value,
    prevProps,
    curProps
  );
}

export function isArrayPropEqual(
  arraySelector,
  itemSelector,
  prevProps,
  curProps
) {
  if (!arraySelector) {
    throw new Error(`invalid selector: ${arraySelector}`);
  }

  const prevArray = arraySelector(prevProps);
  const curArray = arraySelector(curProps);

  if (prevArray.length !== curArray.length) {
    return false;
  }

  const length = prevArray.length;
  for (let i = 0; i < length; ++i) {
    if (itemSelector(prevArray[i]) !== itemSelector(curArray[i])) {
      return false;
    }
  }

  return true;
}
