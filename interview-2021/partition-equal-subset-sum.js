/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const dp = [true];

  const sum = nums.reduce((a, b) => a + b, 0);

  if (sum % 2 !== 0) return false;

  const target = sum / 2;

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]] || false;
    }
  }

  // console.log(dp);

  return !!dp[target];
};

// canPartition([2, 2, 1, 1]);
