/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = 0;
  }

  (dp[0] = 0), (dp[1] = 1);

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      if (i === j * j) {
        dp[i] = 1;
      } else if (dp[i - j * j]) {
        dp[i] = Math.min(dp[i] || Number.MAX_VALUE, dp[i - j * j] + 1);
      }
    }
  }

  return dp[n];
};
