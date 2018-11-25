/**
 * 从排序数组中删除重复项
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let point = 1;
  let i = 1;
  for (i = 1; i < nums.length - point + 1;) {
    if (nums[i] === nums[i-1]) {
      shift(nums, i);
      point++;
    } else {
      i++;
    }
  }
  return i;
};

function shift(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
}

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));