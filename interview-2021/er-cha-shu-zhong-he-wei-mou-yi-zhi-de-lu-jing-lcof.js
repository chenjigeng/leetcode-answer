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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const result = [];
  const helper = (node, cur, sum) => {
    if (!node) {
      return;
    }
    if (sum + node.val === target && !node.left && !node.right) {
      result.push([...cur, node.val]);
    }
    helper(node.left, [...cur, node.val], sum + node.val);
    helper(node.right, [...cur, node.val], sum + node.val);
  };

  helper(root, [], 0);

  return result;
};
