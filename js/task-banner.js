const findBanners = (banners, usersWidth) => {
  let leftPointer = 0;
  let rightPointer = banners.length - 1;

  banners.sort((a, b) => a - b);

  while(leftPointer < rightPointer) {
    const bannersWidth = banners[leftPointer] + banners[rightPointer];

    if (bannersWidth === usersWidth) {
      return [banners[leftPointer], banners[rightPointer]];
    }
    if (bannersWidth > usersWidth) {
      rightPointer--;
    }
    else {
      leftPointer++;
    }
  }
  return 'No answer';
};

findBanners([1, 5, 78, 4, 9, 2], 6);

function countMostFrequent(firstArray, secondArray) {
  const union = [...firstArray, ...secondArray];
  const counter = {};

  for (const number of union) {
    counter[number] = counter[number] ? counter[number] + 1 : 1;
  }

  let maxFrequency = 0;

  for (const frequency of Object.values(counter)) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
    }
  }

  return maxFrequency;
}


countMostFrequent([1, 2, 2, 3], [0, 2, 4, 4]);

function countMostFrequent2(firstArray, secondArray) {
  const union = [...firstArray, ...secondArray];

  return union.reduce((maxOccurences, current, _, array) => {
    const currentOccurences = array.filter((num) => num === current).length;

    return Math.max(currentOccurences, maxOccurences);
  }, 0);
}

countMostFrequent2([1, 2, 2, 3], [0, 2, 4, 4]);

function iqTest1(numbers) {
  const remainders = numbers.split(' ').map((x) => x % 2);
  const sum = remainders.reduce((a, b) => a + b);
  const target = sum > 1 ? 0 : 1;

  return remainders.indexOf(target) + 1;
}
iqTest1('1 2 1 1');

function iqTest(numbers) {
  const parsedNumbers = numbers.split(' ').map((el) => parseInt(el, 10));

  const odd = parsedNumbers.filter((el) => el % 2 === 1);
  const even = parsedNumbers.filter((el) => el % 2 === 0);

  return odd.length < even.length ? (parsedNumbers.indexOf(odd[0]) + 1) : (parsedNumbers.indexOf(even[0]) + 1);
}
iqTest('1 2 1 1');
