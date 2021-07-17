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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const preOrder = (node) => {
    if (!node) return null;

    let left = preOrder(node.left);
    let right = preOrder(node.right);

    if (left) {
      node.right = left;

      while (left && left.right) {
        left = left.right;
      }
      left.right = right;
    } else {
      node.right = right;
    }

    return node;
  };

  preOrder(root);
};
