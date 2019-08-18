/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  return backTracking(root, sum, 0);
};

function backTracking(root, sum, cur,) {
  if (!root) return false;
    
  if (root.left === null && root.right === null) return sum === cur + root.val;

  return backTracking(root.left, sum, cur + root.val) || backTracking(root.right, sum, cur + root.val);
}