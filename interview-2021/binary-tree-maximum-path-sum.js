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
var maxPathSum = function (root) {
  let max = -Number.MAX_VALUE;
  const calc = (node) => {
    if (!node) return 0;

    const leftMax = calc(node.left),
      rightMax = calc(node.right);

    const current = node.val + leftMax + rightMax;

    max = Math.max(max, current, Math.max(leftMax, rightMax, 0) + node.val);

    return Math.max(leftMax, rightMax, 0) + node.val;
  };

  calc(root);

  // console.log(max);

  return max;
};

// const node = {
//   val: -10,
//   left: {
//     val: 9,
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//     },
//     right: {
//       val: 7,
//     },
//   },
// };

// maxPathSum(node);
