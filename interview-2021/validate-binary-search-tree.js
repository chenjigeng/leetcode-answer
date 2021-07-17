/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  let cur;

  const inorder = (node) => {
    if (!node) return true;

    if (!inorder(node.left)) return false;
    if (typeof cur !== "undefined" && node.val <= cur) {
      return false;
    }

    cur = node.val;

    if (!inorder(node.right)) return false;

    return true;
  };

  return inorder(root);
};
