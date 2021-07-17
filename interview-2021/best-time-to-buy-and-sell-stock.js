/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let current = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > current) {
      max = Math.max(prices[i] - current, max);
    } else {
      current = prices[i];
    }
  }

  return max;
};
