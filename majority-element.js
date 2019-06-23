/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let major = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== major) {
      if (count === 0) {
        major = nums[i];
        count = 1;
      } else {
        count--;
      }
    } else {
      count++;
    }
  }

  return major;
};

// console.log((majorityElement([3,2,3])));