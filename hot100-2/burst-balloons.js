/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const dp = [];
  nums.push(1);
  nums.unshift(1);

  for (let i = 0; i < nums.length; i++) {
    dp[i] = [];

    for (let j = 0; j < nums.length; j++) {
      dp[i][j] = 0;
    }

    dp[i][i] = nums[i];
  }

  for (let step = 2; step < nums.length; step++) {
    for (let i = 0; i < nums.length - step; i++) {
      for (let j = i + 1; j < i + step; j++) {
        dp[i][i + step] = Math.max(
          dp[i][i + step],
          dp[i][j] + dp[j][i + step] + nums[i] * nums[j] * nums[i + step]
        );
      }
    }
  }

  // console.log(dp);

  return dp[0][dp[0].length - 1];
};

// nums = [3, 1, 5, 8];

// maxCoins(nums);
