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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    return isSymmetricSame(root.left, root.right);
};

function isSymmetricSame(left, right) {
    if (!left && !right) return true;

    if (!left || !right) return false;

    if (left.val !== right.val) return false;

    return (
        isSymmetricSame(left.right, right.left) &&
        isSymmetricSame(left.left, right.right)
    );
}
