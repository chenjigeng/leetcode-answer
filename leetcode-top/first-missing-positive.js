/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);

  let target = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      if (nums[i] === target) {
        if (nums[i] !== nums[i + 1] || i === nums.length - 1) {
          target++;
        }
      } else {
        return target;
      }
    }
  }

  return target;
};

// firstMissingPositive([1, 1]);
