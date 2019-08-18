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
let node;
var lowestCommonAncestor = function(root, p, q) {
  node = null;
  recur(root, p, q);
  return node;
};

function recur(root, p, q) {
  if (!root) return false;

  const left = recur(root.left, p, q);
  const right = recur(root.right, p, q);
  const current = root === p || root === q;
  
  if (+left + +right + +current >= 2) {
    node = current;
  }

  return left || right || current;
}

