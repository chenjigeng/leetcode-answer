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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let cur = 0;
  const transfer = (node) => {
    if (!node) return;
    transfer(node.right);
    node.val = cur + node.val;
    cur = node.val;
    transfer(node.left);
  };

  transfer(root);

  return root;
};
