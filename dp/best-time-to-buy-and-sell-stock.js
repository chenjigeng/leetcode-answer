/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0

  let min = prices[0];
  const dps = [0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    dps[i] = dps[i - 1] > prices[i] - min ? dps[i - 1] : prices[i] - min;
  }

  return dps[prices.length - 1];
};