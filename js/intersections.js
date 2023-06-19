const intersection = function (nums1, nums2) {
  const result = [];

  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const [smallerSet, largerSet] =
    nums1Set.length > nums2Set ? [nums2Set, nums1Set] : [nums1Set, nums2Set];

  smallerSet.forEach((number) => {
    if (largerSet.has(number)) {
      result.push(number);
    }
  });

  return result;
};

intersection([1, 2], [1, 2, 2, 3]);

const findDifference = function (nums1, nums2) {
  const setNums1 = new Set(nums1);
  const setNums2 = new Set(nums2);

  const result = [[], []];

  for (let num of setNums1) {
    if (!setNums2.has(num)) {
      result[0].push(num);
    }
  }

  for (let num of setNums2) {
    if (!setNums1.has(num)) {
      result[1].push(num);
    }
  }

  return result;
};

findDifference([1, 2], [1, 2, 2, 3]);
