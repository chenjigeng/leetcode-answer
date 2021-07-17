/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const queue = [
        {
            node: root,
            level: 0,
        },
    ];

    const result = [];

    while (queue.length) {
        const { node, level } = queue.shift();
        if (!node) {
            continue;
        }

        if (!result[level]) {
            result[level] = [];
        }

        result[level].push(node.val);

        queue.push({
            node: node.left,
            level: level + 1,
        });

        queue.push({
            node: node.right,
            level: level + 1,
        });
    }

    return result;
};
