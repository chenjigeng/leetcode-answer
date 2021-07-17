/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let target = null;
  const find = (node) => {
    if (!node) return;

    let same = node === p || node === q;
    const leftFindResult = find(node.left),
      rightFindResult = find(node.right);

    if (same + leftFindResult + rightFindResult >= 2) {
      target = node;
    }

    return leftFindResult || rightFindResult || same;
  };

  find(root);
  return target;
};
