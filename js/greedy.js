const coinChange = (coins, amount) => {
  coins.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    while(amount >= coins[i]) {
      amount -= coins[i];
      count++;
    }
  }

  if (amount === 0) {
    return count;
  } else {
    return - 1;
  }
};
const c = [1, 5, 10, 25];
const am = 63;

coinChange(c, am);
