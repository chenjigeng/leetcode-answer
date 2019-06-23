// 递归保本
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//   if (!root) return [];
//   return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
// };

// DFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  const queue = [root];
  const results = [];
  while (queue.length) {
    const node = queue.shift();
    if (typeof node === 'number') {
      results.push(node);
      continue;
    }
    if (node.right) {
      queue.unshift(node.right);
    }
    queue.unshift(node.val);
    if (node.left) {
      queue.unshift(node.left);
    }
  }

  return results;
};

inorderTraversal({
  left: null,
  val: 1,
  right: {
    left: {
      left: null,
      right: null,
      val: 3,
    },
    val: 2,
    right: null,
  }
})