/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (50.00%)
 * Total Accepted:    6.8K
 * Total Submissions: 13.5K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = [], map = {};
  backTracking(res, nums, 0, map);
  return res;
};

/**
 * @param {number[]} nums
 */
function backTracking(res, nums, index, map) {
  if (index === nums.length) {
    return res.push([...nums]);
  }

  for (let i = index; i < nums.length; i++) {
    if (i !== index && map[i]) continue;
    map[i] = true;
    swap(nums, index, i);
    backTracking(res, nums, index + 1, map);
    swap(nums, index, i);
    map[i] = false;
  }
}

function swap(arr, i, j) {
  const item = arr[i];
  arr[i] = arr[j];
  arr[j] = item;
}

console.log(permuteUnique([1, 1, 2, 2]));
