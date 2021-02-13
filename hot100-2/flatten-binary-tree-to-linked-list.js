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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return;

    const helper = (node) => {
        if (!node) return null;

        if (!node.left && !node.right) return node;

        let flattenLeft = helper(node.left),
            flattenRight = helper(node.right);

        node.left = null;
        if (flattenLeft) {
            node.right = flattenLeft;
            while (flattenLeft.right) {
                flattenLeft = flattenLeft.right;
            }

            flattenLeft.right = flattenRight;
        } else {
            node.right = flattenRight;
        }

        return node;
    };

    return helper(root);
};
