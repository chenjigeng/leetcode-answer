/**
 * https://leetcode-cn.com/problems/range-sum-query-immutable/submissions/
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sums = [];
  if (nums.length === 0) return;
  
  this.sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
      this.sums[i] = this.sums[i - 1] + nums[i];
  }
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  if (i <= 0) return this.sums[j];
  return this.sums[j] - this.sums[i - 1];
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = Object.create(NumArray).createNew(nums)
* var param_1 = obj.sumRange(i,j)
*/