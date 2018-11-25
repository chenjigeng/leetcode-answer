/**
 * 子集
 * https://leetcode-cn.com/problems/subsets/description/
 * @param {number[]} nums
 * @return {number[][]}
 * 题解:
 * 对于[1,2,3]这样的输入，其实可以理解为一个[]，先把1加入进来，变为[1]，和之前的一起合并，则变为[],[1]，
 * 之后再对之前的数据加入2，则变为[2]和[1, 2],和之前的合并，变为[], [1], [2], [1, 2]
 * 依次递归操作
 */
var subsets = function(nums) {
    const arr = [[]];
    for (let i = 0; i < nums.length; i++) {
      let len = arr.length;
      for (let j = 0; j < len; j++) {
        arr.push(arr[j].concat(nums[i]));
      }
    }

    return arr;
};

subsets([1, 2, 3]);