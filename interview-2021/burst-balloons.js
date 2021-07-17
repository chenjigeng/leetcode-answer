/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums.unshift(1);
  nums.push(1);

  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    dp[i] = [];

    for (let j = 0; j < nums.length; j++) {
      dp[i][j] = 0;
    }
  }

  for (let step = 2; step < nums.length; step++) {
    for (let i = 0; i + step < nums.length; i++) {
      for (let k = i + 1; k < i + step; k++) {
        dp[i][i + step] = Math.max(
          dp[i][i + step],
          dp[i][k] + dp[k][i + step] + nums[i] * nums[k] * nums[i + step]
        );
      }
    }
  }

  return dp[0][nums.length - 1];
};

// nums = [3, 1, 5, 8];

// console.log(maxCoins(nums));
