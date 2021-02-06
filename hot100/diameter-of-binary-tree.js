/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function dfs(node) {
        if (!node) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);


        console.log(node, leftDepth, rightDepth);

        max = Math.max(max, leftDepth + rightDepth + 1);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root);
    return max;

};