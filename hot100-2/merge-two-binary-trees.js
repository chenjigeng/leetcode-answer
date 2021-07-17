/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const helper = (node1, node2) => {
    if (!node1 && !node2) return null;
    let newNode = {};

    if (node1 && node2) {
      newNode.val = node1.val + node2.val;
      newNode.left = helper(node1.left, node2.left);
      newNode.right = helper(node1.right, node2.right);
    } else if (!node1) {
      newNode = node2;
    } else {
      newNode = node1;
    }

    return newNode;
  };

  return helper(root1, root2);
};
