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
var isValidBST = function (root) {
    const result = [];

    const stack = [
        {
            node: root,
            visited: false,
        },
    ];

    while (stack.length) {
        const node = stack.pop();
        console.log(node);

        if (node.visited) {
            if (
                result.length > 0 &&
                result[result.length - 1] >= node.node.val
            ) {
                return false;
            }
            result.push(node.node.val);
            continue;
        }

        if (node.node.right) {
            stack.push({
                visited: false,
                node: node.node.right,
            });
        }

        stack.push({
            visited: true,
            node: node.node,
        });

        if (node.node.left) {
            stack.push({
                visited: false,
                node: node.node.left,
            });
        }
    }

    return true;
};
