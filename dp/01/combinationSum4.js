/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
	const dp = [1];
	for (let i = 1; i <= target; i++) {
		dp[i] = 0;
		let sum = 0;
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] <= i && dp[i - nums[j]] !== 0) {
				sum += dp[i - nums[j]];
			}
		}

		if (sum !== 0) dp[i] = sum;
	}

	return dp[target];
};

// nums = [1, 2, 3]
// target = 4
// console.log(combinationSum4(nums, target));

// m n = Max(dp(m - 1, n - 1), dp(m - 3, n - 1), dp(m - 2, n - 4), dp(m - 0, n - 1), dp(m - 1, n - 0));
