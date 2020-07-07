/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = [0];

  const limit = Math.sqrt(n);

  for (let i = 1; i <=n; i++) {
    dp[i] = 1;
    for (let j = 1; i >= j * j; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  
  return dp[n];
};

// console.log(numSquares(13));