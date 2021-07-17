/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1;
  let cur = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      cur = nums[i];
      count = 1;
      continue;
    }
    if (nums[i] !== cur) {
      count--;
    } else {
      count++;
    }
  }

  return cur;
};
