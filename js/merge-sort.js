const merge = (arrLeft, arrRight) => {
  const sortArr = [];
  let i = 0;
  let j = 0;

  while (i < arrLeft.length && j < arrRight.length) {
    sortArr.push(arrLeft[i] < arrRight[i] ? arrLeft[i++] : arrRight[j++]);
  }
  return [...sortArr, ...arrLeft.slice(i), ...arrRight.slice(j)];
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

const merge2 = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while (j >= 0 && i >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }

  return nums1;
};

merge2([1, 2, 3], 3, [2, 5, 6, 7], 4);
