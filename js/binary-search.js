const binarySearch = (arr, el) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + (right - left)/ 2));
    if (arr[mid] === el) {
      return true;
    } else if (arr[mid] < el) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

binarySearch([1, 2, 3], 7);

binarySearch([1, 2, 3], 3);

