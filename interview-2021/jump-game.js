/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    dp[i] = false;
  }

  dp[nums.length - 1] = true;

  for (let j = nums.length - 2; j >= 0; j--) {
    if (nums[j] + j >= nums.length - 1) {
      dp[j] = true;
      continue;
    }

    for (let k = j + 1; k <= j + nums[j]; k++) {
      if (dp[k]) {
        dp[j] = dp[k];
        break;
      }
    }
  }

  return dp[0];
};

// console.log(canJump([1, 2, 3]));
