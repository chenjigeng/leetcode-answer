/**
 * 旋转数组
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/23/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  let length = nums.length;
  for (let i = 0; i < k; i++) {
    let last = nums[length - 1];
    shiftRight(nums);
    nums[0] = last;
  }

  return nums;
};

console.log(rotate([-1, -100, 3, 99], 2));

function shiftRight(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i-1];
  }
}