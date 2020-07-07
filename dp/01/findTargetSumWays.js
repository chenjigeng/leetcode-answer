// let count = 0;
// /**
//  * @param {number[]} nums
//  * @param {number} S
//  * @return {number}
//  */
// var findTargetSumWays = function(nums, S) {
// 	count = 0;
// 	helper(nums, 0, S);

// 	// console.log(count);
// 	return count;
// };

// findTargetSumWays([1, 1, 1, 1, 1], 3)
// /**
//  *
//  *
//  * @param {Array} nums
//  * @param {number} index
//  * @param {number} target
//  * @returns
//  */
// function helper(nums, index, target) {
// 	const arrSum = sum(nums, index);
// 	if (arrSum <= target) {
// 		if (arrSum === target) {
// 			count++;
// 		}

// 		return;
// 	}

// 	if (index === nums.length) {
// 		if (target === 0) {
// 			count++;
// 		}

// 		return;
// 	}
// 	helper(nums, index + 1, target - nums[index]);
// 	helper(nums, index + 1, target + nums[index]);
// }

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
	const sum = nums.reduce((prev, cur) => prev + cur, 0);
	if (sum < S) return 0;
	const target = (sum + S) / 2;
	if (target !== parseInt(target)) return 0;

	const dp = [1];
	for (let i = 1; i <= target; i++) {
		dp[i] = 0;
	}
	for (let i = 0; i < nums.length; i++) {
		for (let j = target; j >= nums[i]; j--) {
			dp[j] += dp[j - nums[i]];
		}
	}

	console.log(dp);

	return dp[target];
};

// findTargetSumWays([1, 1, 1, 1, 1], 3)
// findTargetSumWays([1,2,7,9,981], 1000000000);