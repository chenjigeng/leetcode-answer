/**
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = Math.max(...nums);

    let cur = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + cur > 0) {
            cur = nums[i] + cur;
            max = Math.max(cur, max);
        } else {
            cur = Math.max(nums[i], 0);
        }
    }

    // console.log(max);
    return max;
};

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
