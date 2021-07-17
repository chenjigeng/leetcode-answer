/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
  const dp = [];

  for (let i = 0; i <= n; i++) {
    dp[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[n];
};
