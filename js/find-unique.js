const makeUniqueArray = (arr) => {
  const uniqueSet = new Set(arr);

  return [...uniqueSet];
};

makeUniqueArray([1, 1, 2, 2, 3, 3, 3, 4, 5]);

