/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let min = 1, max = 1, result = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      [min, max] = [max, min];
    }

    min = Math.min(min * nums[i], nums[i]);
    max = Math.max(max * nums[i], nums[i]);

    result = Math.max(result, max);
  } 

  return result;
};

// console.log(maxProduct([2,3,-2, 4, -5]));
// console.log(maxProduct([-1, 0, -1]));
// console.log(maxProduct([-2]))
// console.log(maxProduct([3,-1,4]))