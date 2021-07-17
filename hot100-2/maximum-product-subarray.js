/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length === 0) return 0;
    let result = nums[0];
    let min = nums[0],
        max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let newMax = Math.max(nums[i], max * nums[i], min * nums[i]);
        let newMin = Math.min(nums[i], max * nums[i], min * nums[i]);

        max = newMax;
        min = newMin;

        result = Math.max(max, result);
    }

    // console.log(result);
    return result;
};

// maxProduct([-2, 0, -1]);

// maxProduct([-4, -3, -2]);
