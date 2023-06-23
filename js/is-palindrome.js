const isPalindrome = function (s) {
  const str = s.replace(/[^a-zа0-9]/gi, '').toLowerCase();
  const arr = str.split('');

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }

  return true;
};

isPalindrome('A man, a plan, a canal: Panama');
