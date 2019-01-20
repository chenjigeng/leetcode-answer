/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dps = [0, 1, 2];
  if (n < 3) return dps[n];
  for (let i = 3; i <= n; i++) {
    dps[i] = dps[i - 1] + dps[i - 2];
  }

  return dps[n];
};