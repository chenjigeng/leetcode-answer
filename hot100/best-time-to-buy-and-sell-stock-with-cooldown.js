/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = [];

  for (let i = 0; i < prices.length + 2; i++) {
    dp[i] = 0;
  }

  for (let i = prices.length - 2; i >= 0; i--) {
    let buyMax = 0;

    for (let j = i + 1; j < prices.length; j++) {
      buyMax = Math.max(buyMax, prices[j] - prices[i] + dp[j + 2]);
    }

    dp[i] = Math.max(dp[i + 1], buyMax);
  }

  return dp[0];
};

// const prices = [1, 2, 3, 0, 2];

// console.log(maxProfit(prices));
