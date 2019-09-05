/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let min = [], max = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      min[i] = nums[i];
    } else {
      if (min[i - 1] > nums[i]) {
        min[i] = nums[i];
      } else {
        min[i] = min[i - 1];
      }
    }

    let index = nums.length - i - 1;
    if (i === 0) {
      max[index] = nums[index];
    } else {
      if (max[index + 1] < nums[index]) {
        max[index] = nums[index];
      } else {
        max[index] = max[index + 1];
      }
    }
  }

  // console.log(min, max)

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > min[i - 1] && nums[i] < max[i + 1]) {
      return true;
    }
  }

  return false;
};

// console.log(increasingTriplet([5,1,5,5,2,5,4]));