const reversed = (arr) => {
  const reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
};

reversed([1, 2, 3]);

const cleaned = (arr) => arr.filter((el) => el);

cleaned([0, 1, false, 2, undefined, '', 3, null]);

const findAnagrams = (array) => {
  const anagram = {};

  for (const word of array) {
    const key = word.split('').sort().join('');

    if (!(key in anagram)) {
      anagram[key] = [];
    }
    anagram[key].push(word);
  }
  const groups = Object.values(anagram);

  const words = [];

  for (const group of groups) {
    if (group.length > 1) {
      words.push(group[group.length - 1]);
    }
  }

  return words;
};

const input = [
  'dog',
  'screen',
  'abba',
  'mamba',
  'abc',
  'bamam',
  'god',
  'aabc',
  'odg',
];

findAnagrams(input);

//Counting instances of values in an object

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const findFrequency = (ar) => {
  const namesObj = ar.reduce((allNames, name) => {
    const currentCount = allNames[name] ? allNames[name] : 0;

    return {
      ...allNames,
      [name]: currentCount + 1,
    };
  }, {});

  return namesObj;
};

findFrequency(names);

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

// eslint-disable-next-line no-console
console.log(myArrayWithNoDuplicates);

const twoSum = function (nums, target) {
  const object = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in object) {
      return [i, object[diff]];
    }

    object[nums[i]] = i;
  }
};

twoSum([1, 3, 5, 6, 7], 11);
//The in operator in JavaScript is used to determine if a certain property exists in an object or its inherited properties (also known as its prototype chain). If the provided property exists, the in operator returns true.

const strStr = function (haystack, needle) {
  if (needle === '' || needle === haystack) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};

const longestPalindrome = function (s) {
  const strs = s.toLowerCase();

  const obj = {};
  for (const str of strs) {
    if (str in obj) {
      obj[str]++;
    } else {
      obj[str] = 1;
    }
  }

  const amounts = Object.values(obj);

  return Math.max(...amounts);
};
