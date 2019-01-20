/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/comments/
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || nums.length === 0) return null;

  return buildTree(nums, 0, nums.length - 1);
};

function buildTree(nums, l, r) {
  if (l > r) {
    return null;
  }

  if (l === r) {
    return {
      val: nums[l],
      left: null,
      right: null,
    };
  }

  const mid = Math.floor((l + r) / 2);
  const currentNode = {
    val: nums[mid],
    left: null,
    right: null,
  };

  currentNode.left = buildTree(nums, l, mid - 1);
  currentNode.right = buildTree(nums, mid + 1, r);

  return currentNode;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))