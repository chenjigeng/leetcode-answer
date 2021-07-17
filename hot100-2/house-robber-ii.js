/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [0, nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    if (i + 1 === nums.length) {
      dp[i + 1] = dp[i];
    }
  }

  const dp2 = [0, 0];

  for (let i = 1; i < nums.length; i++) {
    dp2[i + 1] = Math.max(dp2[i], dp2[i - 1] + nums[i]);
  }

  return Math.max(dp[nums.length], dp2[nums.length]);
};
