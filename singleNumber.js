/**
 * 只存在一次的数字
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/25/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
};

console.log(singleNumber([2, 2, 1]));