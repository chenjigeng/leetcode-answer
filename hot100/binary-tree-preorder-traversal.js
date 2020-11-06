/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];

    const stack = [root];

    while (stack.length) {
        const top = stack.pop();
        if (!top) {
            continue;
        }

        stack.push(top.node.right);

        stack.push(top.node.left);

        result.push(top.node.val);
    }

    return result;
};
