/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!B) return false;
  const same = (a, b) => {
    if (!b) return true;

    if (!a) return false;

    if (a.val === b.val) {
      // 两个节点值相同的话，则比较左右子树是否相同
      if (same(a.left, b.left) && same(a.right, b.right)) {
        return true;
      }
    }

    // 其他情况下，则说明 a 节点肯定不符合，则尝试判断 a 节点的左右子树是否符合（需要从B节点重新开始）
    return same(a.left, B) || same(a.right, B);
  };

  return same(A, B);
};
