/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const dp = [];
    
    const val = [1];
    for (i = 0; i < nums.length; i++) {
        val[i + 1] = nums[i];
    }
    val[nums.length + 1] = 1;


    for (let i = 0; i < val.length; i++) {
        dp[i] = [];

        for (let j = 0; j < val.length; j++) {
            dp[i][j] = 0;
            dp[i][i] = val[i];
        }
    }

    let max = 0;

    for (let step = 2; step <= nums.length + 1; step++) {
        for (let j = 0; j <= nums.length - step + 1; j++) {
            for (let k = j + 1; k < j + step; k++) {
                console.log(j, j + step, k, dp[j][k] + dp[k][j + step] + val[j] * val[k] * val[j + step]);
                dp[j][j + step] = Math.max(dp[j][j + step], dp[j][k] + dp[k][j + step] + val[j] * val[k] * val[j + step]);
                max = Math.max(max, dp[j][j+ step])
            }
        }
    }

    // console.log(dp, max);
    return max;
};


// console.log(maxCoins([3,1,5,8]));