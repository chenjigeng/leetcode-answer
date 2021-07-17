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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = [];

    const stack = [
        {
            node: root,
            visited: false,
        },
    ];

    while (stack.length) {
        const node = stack.pop();
        if (!node.node) {
            continue;
        }
        if (node.visited) {
            result.push(node.node.val);
            continue;
        }

        stack.push({
            node: node.node.right,
            visited: false,
        });

        stack.push({
            node: node.node,
            visited: true,
        });
        stack.push({
            node: node.node.left,
            visited: false,
        });
    }

    return result;
};
