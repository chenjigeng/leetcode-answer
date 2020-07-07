/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  return helper(nums, 0, nums.length - 1);
};

function helper(nums, start, end) {

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

// console.log(findPeakElement([1,2,3,1]));
// console.log(findPeakElement([1,2]));
// console.log(findPeakElement([2, 1]));


