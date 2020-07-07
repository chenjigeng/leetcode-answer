/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let max = -100000;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  max = -100000;
  helper(root);
  return max;
};


function helper(root) {
  if (!root) return -100000;
  
  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);
  
  max = Math.max(root.val + Math.max(left, 0)  + Math.max(right, 0), max);

  return root.val + Math.max(left, right, 0);
}