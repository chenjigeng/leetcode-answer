/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  while (true) {
    const left = [],
      right = [];

    const ele = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > ele) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }

    if (left.length >= k) {
      nums = left;
    } else if (k === left.length + 1) {
      return ele;
    } else {
      nums = right;
      k -= left.length + 1;
    }
  }
};
