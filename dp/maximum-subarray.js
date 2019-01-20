/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0], sum = 0;
  for (let num of nums) {
      if (sum > 0) {
          sum += num;
      } else {
          sum = num;
      }
      
      res = Math.max(res, sum);
  }
  
  return res;
};

// console.log(maxSubArray([-2,-1]));
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
