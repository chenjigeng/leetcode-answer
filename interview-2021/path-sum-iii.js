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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let count = 0;

  const helper = (node, cur, hasStarted) => {
    if (!node) {
      return;
    }

    if (node.val + cur === sum) {
      count++;
    }

    helper(node.left, cur + node.val, true);
    helper(node.right, cur + node.val, true);
    if (!hasStarted) {
      helper(node.left, 0, false);
      helper(node.right, 0, false);
    }
  };

  helper(root, 0, false);

  // console.log(count);
  return count;
};
