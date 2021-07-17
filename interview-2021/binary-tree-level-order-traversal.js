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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];

  const level = (node, index) => {
    if (!node) return;
    if (!result[index]) {
      result[index] = [];
    }

    result[index].push(node.val);

    level(node.left, index + 1);
    level(node.right, index + 1);
  };

  level(root, 0);

  return result;
};
