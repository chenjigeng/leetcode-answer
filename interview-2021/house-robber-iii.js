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
var rob = function (root) {
  const includeMap = new Map(),
    unincludeMap = new Map();
  const helper = (node, include) => {
    if (!node) return 0;
    if (include && includeMap.has(node)) return includeMap.get(node);
    if (!include && unincludeMap.has(node)) return unincludeMap.get(node);

    if (include) {
      let val = node.val + helper(node.left, false) + helper(node.right, false);
      includeMap.set(node, val);
      return val;
    }

    let val =
      Math.max(helper(node.left, true), helper(node.left, false)) +
      Math.max(helper(node.right, true), helper(node.right, false));
    unincludeMap.set(node, val);
    return val;
  };

  return Math.max(helper(root, false), helper(root, true));
};

// const result = {
//   val: 4,
//   left: {
//     val: 1,
//     right: {
//       val: 2,
//       left: {
//         val: 3,
//       },
//     },
//   },
// };
// console.log(rob(result));
