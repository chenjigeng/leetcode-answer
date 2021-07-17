/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Number.MAX_VALUE,
    current = 0;

  for (let i = 0; i < nums.length; i++) {
    current = Math.max(0, current + nums[i]);

    max = Math.max(max, current);
  }

  return max;
};
