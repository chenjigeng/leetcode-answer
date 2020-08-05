/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [nums[0]];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] <= 0) {
            dp[i] = nums[i];
        } else {
            dp[i] = dp[i - 1] + nums[i]
        }
        
        max = Math.max(dp[i], max);
    }

    // console.log(max);

    return max;
};

// maxSubArray([-2,-1,-3])