/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  const dp = [];

  dp[0] = [];

  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i] = [];
    // 持有股票
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 不持有股票，当处于冷冻期（卖了）
    dp[i][1] = dp[i - 1][0] + prices[i];
    // 不持有股票，不处于冷冻期
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }

  const n = prices.length - 1;

  return Math.max(dp[n][0], dp[n][1], dp[n][2]);
};
