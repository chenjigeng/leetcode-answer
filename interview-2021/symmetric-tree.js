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

  const sym = (left, right) => {
    if (!left && !right) return true;

    if (!left || !right) return false;

    if (left.val !== right.val) return false;

    return sym(left.left, right.right) && sym(left.right, right.left);
  };

  return sym(root.left, root.right);
};
