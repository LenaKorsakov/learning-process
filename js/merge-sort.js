const merge = (arrLeft, arrRight) => {
  const sortArr = [];
  let i = 0;
  let j = 0;

  while ( i < arrLeft.length && j < arrRight.length) {
    sortArr.push(
      (arrLeft[i] < arrRight[i]) ? arrLeft[i++] : arrRight[j++]
    );
  }
  return [
    ...sortArr,
    ...arrLeft.slice(i),
    ...arrRight.slice(j)
  ];
};

const mergeSort = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }

  if (arr.length <= 1) {
    return arr;
  }

  const medianIndex = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, medianIndex);
  const arrRight = arr.slice(medianIndex);

  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};
const myArr = [6, 7, 3, 777, 2424, -17, -2, 1, 0];
mergeSort(myArr);

