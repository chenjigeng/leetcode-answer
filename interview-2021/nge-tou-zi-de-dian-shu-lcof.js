/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  const choices = Math.pow(6, n);

  const dp = [];

  for (let i = 1; i <= n; i++) {
    dp[i] = [];

    for (let j = 0; j <= 6 * n; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= 6; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= 6 * i; j++) {
      for (let cur = 1; cur <= 6; cur++) {
        if (j - cur >= i - 1) {
          dp[i][j] = dp[i][j] + dp[i - 1][j - cur];
        }
      }
    }
  }

  const result = [];

  for (let i = 1; i <= 6 * n; i++) {
    if (dp[n][i] !== 0) {
      result.push(dp[n][i] / choices);
    }
  }

  return result;
};

// console.log(dicesProbability(2));
