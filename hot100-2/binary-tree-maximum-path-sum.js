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
 * @return {number}
 */
var maxPathSum = function (root) {
    let max = -Number.MAX_VALUE;

    const getMax = (node) => {
        if (!node) return 0;

        const leftMax = getMax(node.left);
        const rightMax = getMax(node.right);

        const alone = node.val + Math.max(leftMax, 0) + Math.max(rightMax, 0);
        const returnValue = node.val + Math.max(leftMax, rightMax, 0);
        max = Math.max(max, alone, returnValue);

        return returnValue;
    };

    getMax(root);
    return max;
};
