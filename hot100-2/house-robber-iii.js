/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const helper = (node, canAdd) => {
    if (!node) return 0;
    const leftMax = helper(node.left, true),
      rightMax = helper(node.right, true);

    // console.log(canAdd, node, leftMax, rightMax, leftMax + rightMax);

    if (!canAdd) {
      return leftMax + rightMax;
    }

    const leftWithoutRoot = helper(node.left, false),
      rightWithoutRoot = helper(node.right, false);
    // console.log(
    //   canAdd,
    //   node,
    //   leftMax,
    //   rightMax,
    //   leftWithoutRoot,
    //   rightWithoutRoot,
    //   Math.max(
    //     node.val + leftWithoutRoot + rightWithoutRoot,
    //     leftMax + rightMax
    //   )
    // );

    return Math.max(
      node.val + leftWithoutRoot + rightWithoutRoot,
      leftMax + rightMax
    );
  };

  return helper(root, true);
};

// const root = {
//   val: 3,
//   left: {
//     val: 2,
//     right: {
//       val: 3,
//     },
//   },
//   right: {
//     val: 3,
//     right: {
//       val: 1,
//     },
//   },
// };

// console.log(rob(root));
