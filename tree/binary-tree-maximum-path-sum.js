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
 * 分为根节点和非根节点两种情况考虑
 * 返回值直接返回非根节点的情况（因为依赖返回值的时候，一定是被父节点调用，这个时候他肯定不可能是根节点）
 */
let max;
var maxPathSum = function(root) {
  max = -10000;
  getMax(root);
  return max;
};

function getMax(root) {
  if (!root) return 0;
  const left = Math.max(getMax(root.left), 0);
  const right = Math.max(getMax(root.right), 0);

  max = Math.max(max, root.val + left + right);

  return Math.max(left, right) + root.val;
}

// console.log(maxPathSum({
//   val: -2,
//   left: {
//     val: -1,
//   }
// }))