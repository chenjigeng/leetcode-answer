/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return isSymmetricSame(root.left, root.right);
};

function isSymmetricSame(left, right) {
  if (!left && !right) return true;

  if (!left || !right) return false;

  if (left.val !== right.val) return false;

  return (
    isSymmetricSame(left.right, right.left) &&
    isSymmetricSame(left.left, right.right)
  );
}
