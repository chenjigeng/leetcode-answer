/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const dp = [];

  const sum = nums.reduce((a, b) => a + b, 0);

  const rawArr = [];

  for (let i = 0; i <= 2 * sum; i++) {
    dp[i] = 0;
    rawArr[i] = 0;
  }

  if (nums[0] === 0) {
    dp[sum] = 2;
  } else {
    (dp[sum + nums[0]] = 1), (dp[sum - nums[0]] = 1);
  }

  for (let i = 1; i < nums.length; i++) {
    const positiveDp = [...rawArr],
      nevativeDp = [...rawArr];
    for (let j = 0; j <= 2 * sum; j++) {
      if (j - nums[i] >= 0 && dp[j - nums[i]] > 0) {
        positiveDp[j] = dp[j - nums[i]];
      }

      if (j + nums[i] >= 0 && j + nums[i] <= 2 * sum && dp[j + nums[i]] > 0) {
        nevativeDp[j] = dp[j + nums[i]];
      }
    }

    for (let j = 0; j <= 2 * sum; j++) {
      dp[j] = positiveDp[j] + nevativeDp[j];
    }
  }

  return dp[sum + target] || 0;
};

// findTargetSumWays([1, 2, 1], 0);
// console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 1000], -1000));
