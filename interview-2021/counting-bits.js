/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = [0];

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
};
