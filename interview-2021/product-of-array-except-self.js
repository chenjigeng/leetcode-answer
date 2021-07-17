/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftProduct = [1],
    rightProduct = [];
  rightProduct[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct[i] * rightProduct[i];
  }

  return result;
};
