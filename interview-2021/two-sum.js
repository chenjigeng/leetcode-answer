/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] && nums.lastIndexOf(target - nums[i]) > i) {
      return [i, nums.lastIndexOf(target - nums[i])];
    }
  }
};

// console.log(twoSum([3, 3], 6));
