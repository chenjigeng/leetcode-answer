/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  return recur(root, 0);
};

function recur(root, cur) {
  if (!root) {
    return;
  }

  const sum = cur * 10 + root.val;
  if (!root.left && !root.right) {
    return sum;
  }

  return recur(root.left, sum) + recur(root.right, sum);
}
