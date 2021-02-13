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
var inorderTraversal = function(root) {
    const result = [];

    const stack = [{
        visited: false,
        node: root,
    }];

    while (stack.length) {
        const top = stack.pop();
        if (!top.node) {
            continue;
        }
        if (top.visited) {
            result.push(top.node.val);
            continue;
        }
        stack.push({
            visited: false,
            node: top.node.right
        });

        stack.push({
            visited: true,
            node: top.node
        });

        stack.push({
            visited: false,
            node: top.node.left
        });
    }

    return result;
};
