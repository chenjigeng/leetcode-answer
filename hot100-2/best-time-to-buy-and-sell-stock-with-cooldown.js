/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  const dp = [];
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    dp[i] = [];
    // 持有股票
    dp[i][0] = 0;
    // 没有持有股票，但是出于冷冻期,说明在当天卖了股票
    dp[i][1] = 0;
    // 没有持有股票，并且不属于
    dp[i][2] = 0;
  }

  dp[0][0] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    max = Math.max(dp[i][0], dp[i][1], dp[i][2], max);
  }

  // console.log(max);
  return max;
};

// maxProfit([1, 2, 3, 0, 2]);
