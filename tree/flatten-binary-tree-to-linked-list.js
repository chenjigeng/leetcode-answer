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
  const stack = [root];
  let curNode = root;

  while (stack.length) {
    const top = stack.pop();

    if (!top) continue;

    if (top.right) {
      stack.push(top.right);
    }

    if (top.left) {
      stack.push(top.left);
    }

    curNode.left = null;
    if (top !== root) {
      curNode.right = top;
      curNode = top;
    }
  }
};

// const root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3,
//     },
//     right: {
//       val: 4,
//     },
//   },
//   right: {
//     val: 5,
//     right: {
//       val: 6,
//     },
//   },
// };

// flatten(root);
