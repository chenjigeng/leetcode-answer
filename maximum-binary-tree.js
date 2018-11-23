/**
 * https://leetcode-cn.com/problems/maximum-binary-tree/description/
 * 最大二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const leftArr = nums.slice(0, maxIndex);
  const rightArr = nums.slice(maxIndex + 1);
  const rootNode = new TreeNode(max);
  rootNode.left = constructMaximumBinaryTree(leftArr);
  rootNode.right = constructMaximumBinaryTree(rightArr);
  const arr = [];
  return rootNode;
};

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));
