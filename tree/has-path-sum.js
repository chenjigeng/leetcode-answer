/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return helper(root, 0, sum);
};

function helper(root, cur, sum) {
    if (root === null) return false;

    if (!root.left && !root.right) return root.val + cur === sum;

    if (cur > sum) return false;

    return helper(root.left, cur + root.val, sum)  || helper(root.right, cur + root.val, sum)

}