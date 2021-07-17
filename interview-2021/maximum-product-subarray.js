/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;
  let max = nums[0];

  let currentMin = nums[0],
    currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let nextMax = Math.max(nums[i], nums[i] * currentMin, nums[i] * currentMax);
    let nextMin = Math.min(nums[i], nums[i] * currentMin, nums[i] * currentMax);

    (currentMax = nextMax), (currentMin = nextMin);

    max = Math.max(currentMax, max);
  }

  return max;
};
