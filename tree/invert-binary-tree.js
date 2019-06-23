/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;
  const right = root.right;
  root.right = root.left;
  root.left = right;
  if (root.right) {
    invertTree(root.right);
  } else if (root.left) {
    invertTree(root.left);
  }
  return root;
};