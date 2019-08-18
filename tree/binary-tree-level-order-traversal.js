/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 递归
// var levelOrder = function(root) {
//   const arr = [];
//   cur(arr, root, 0);

//   return arr;
// };

// function cur(arr, root, order) {
//   if (!root) return;
//   if (!arr[order]) arr[order] = [];
//   arr[order].push(root.val);
//   root.left && cur(arr, root.left, order + 1);
//   root.right && cur(arr, root.right, order + 1);
// }

// 循环，本质上就是 BFS
var levelOrder = function(root) {
  if (!root) return [];
  const arr = [];
  const queue = [];
  queue.push({
    level: 0,
    node: root,
  });

  while (queue.length > 0) {
    const { level, node } = queue.shift();

    if (!arr[level]) arr[level] = [];
    arr[level].push(node.val);
    if (node.left) {
      queue.push({
        level: level + 1,
        node: node.left,
      });
    }

    if (node.right) {
      queue.push({
        level: level + 1,
        node: node.right,
      });
    }
  }

  return arr;
};
