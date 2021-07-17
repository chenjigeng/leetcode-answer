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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  const helper = (node, level) => {
    if (!node) return;
    if (!result[level]) {
      result[level] = [];
    }

    result[level].push(node.val);

    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };

  helper(root, 0);

  return result.map((item) => item[item.length - 1]);
};
