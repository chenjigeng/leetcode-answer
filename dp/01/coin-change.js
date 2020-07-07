/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	const dp = [0];
	for (let i = 1; i <= amount; i++) {
		dp[i] = -1;
		let min = 10000;
		for (let j = 0; j < coins.length; j++) {
			if (i >= coins[j] && dp[i - coins[j]] !== -1) {
				min = Math.min(min, dp[i - coins[j]] + 1);
			}
		}
		if (min !== 10000) {
			dp[i] = min;
		}
	}

	return dp[amount];

};

// console.log(coinChange([1,2,5], 11));
// console.log(coinChange([2], 3));
