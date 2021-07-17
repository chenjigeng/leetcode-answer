/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  const root = preorder[0];
  const index = inorder.indexOf(root);
  const left = inorder.slice(0, index),
    right = inorder.slice(index + 1);

  const leftPreorder = preorder.slice(1, left.length + 1),
    rightPreorder = preorder.slice(left.length + 1);

  const node = {
    val: root,
    left: buildTree(leftPreorder, left),
    right: buildTree(rightPreorder, right),
  };

  return node;
};
