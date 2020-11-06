/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const stack = [{
        visited: false,
        node: root,
    }];

    const result = [];

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
            visited: true,
            node: top.node,
        });
        
        top.node.children.reverse().map(node => {
            stack.push({
                visited: false,
                node,
            })
        });
    }

    return result;
};