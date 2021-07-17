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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;
  const transfer = (node) => {
    if (!node) return 0;
    const left = transfer(node.left),
      right = transfer(node.right);

    const current = left + right + 1;
    max = Math.max(current, max);

    return Math.max(left, right) + 1;
  };

  transfer(root);

  return max - 1;
};
