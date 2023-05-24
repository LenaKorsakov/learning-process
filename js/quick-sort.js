const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const equalArr = [pivot];
  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else if (arr[i] === pivot) {
      equalArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), ...equalArr, ...quickSort(rightArr)];
};

const numbers = [6, 8, 9, 15, 1, 3, 9, 1, 6, 8];
quickSort(numbers);
