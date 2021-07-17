/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [0];

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        if (dp[i - coins[j]] === undefined) {
          continue;
        }
        if (dp[i] === undefined) {
          dp[i] = dp[i - coins[j]] + 1;
        } else {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
  }

  return dp[amount] === undefined ? -1 : dp[amount];
};

// console.log(coinChange([2], 3));
