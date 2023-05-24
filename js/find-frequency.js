const findFrequency = (arr) => {
  const frequency = {};

  for (const number of arr) {
    const count = arr.filter((item) => item === number).length;

    frequency[number] = count;
  }

  return frequency;
};

findFrequency([1,1,1,1,1,4,5,6,7,7,8,8,8,8,9,9,9,9]);

const findMostFrequent = (arr) => {
  const frequencyCount = {};

  for (const number of arr) {
    frequencyCount[number] = frequencyCount[number] ? frequencyCount[number] + 1 : 1;
  }

  let maxFrequency = 0;
  let maxNumber = 0;

  for (const [number, value] of Object.entries(frequencyCount)) {
    if (value > maxFrequency) {
      maxFrequency = value;
      maxNumber = number;
    }
  }

  return([maxFrequency, parseInt(maxNumber, 10)]);
};
findMostFrequent([1,1,1,1,1,4,5,6,7,7,8,8,8,8,9,9,9,9]);
