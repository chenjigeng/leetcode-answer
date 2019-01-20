/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

  if (!root) {
    return [];
  }

  const stack = [{
    path: [root.val],
    node: root,
  }];

  const result = [];

  while (stack.length) {
    const { node, path } = stack.pop();
    if (node.left) {
      stack.push({
        path: [...path, node.left.val],
        node: node.left,
      });
    }

    if (node.right) {
      stack.push({
        path: [...path, node.right.val],
        node: node.right,
      });
    }

    if (!node.left && !node.right) {
      result.push(path.join('->'));
    }
  }

  return result;
};