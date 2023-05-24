const isEqual = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if(firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }
  return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
};

isEqual(
  {'1': 1},
  {'1': 1},
);

