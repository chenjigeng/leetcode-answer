/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const leftProduct = [1];
    const rightProduct = [];
    rightProduct[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
        rightProduct[nums.length - i - 1] =
            rightProduct[nums.length - i] * nums[nums.length - i];
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct[i] * rightProduct[i];
    }

    return result;
};
