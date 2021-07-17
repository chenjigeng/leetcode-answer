/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, j * (i - j));
    }
  }

  return dp[n];
};
