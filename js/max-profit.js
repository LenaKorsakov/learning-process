const findMaxProfit = function (prices) {
  let left = 0;
  let right = 1;

  let maxProfit = 0;

  while (left < prices.length) {
    const dif = prices[right] - prices[left];
    if (dif < 0) {
      left = right;
    } else {
      maxProfit = Math.max(dif, maxProfit);
    }
    right++;
  }

  return maxProfit;
};
