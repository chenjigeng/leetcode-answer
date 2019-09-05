/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let major = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== major) {
      count--;
    } else {
      count++;
    }

    if (count === 0) {
      count = 1;
      major = nums[i];
    }
  }

  return major;
};

console.log((majorityElement([3,2,3])));