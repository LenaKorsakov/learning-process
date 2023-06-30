const isPalindrome = function (s) {
  const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }

  return true;
};

isPalindrome('A man, a plan, a canal: Panama');

const validPalindrome = function (s) {
  let low = 0;
  let high = s.length - 1;

  while (low < high) {
    if (s[low] !== s[high]) {
      return skipStranger(s, low + 1, high) || skipStranger(s, low, high - 1);
    }
    low++;
    high--;
  }

  return true;
};

function skipStranger(str, low, high) {
  while (low < high) {
    if (str[low] !== str[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
}
