/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {  
    const stack = [{
        node: root,
        val: [root.val]
    }];

    const result = [];

    while (stack.length) {
        const top = stack.pop();

        const { node, val } = top;

        if (!node.left && !node.right) {
            result.push(val);
        } else {
            if (node.left) {
                stack.push({
                    node: node.left,
                    val: val + `->${node.left.val}`
                })
            }
            if (node.right) {
                stack.push({
                    node: node.right,
                    val: val + `->${node.right.val}`
                })
            }
        }
    }

    return result;
};

// console.log(binaryTreePaths({
//     val: 1,
//     left: {
//         val: 2,
//         right: {
//             val: 5
//         }
//     },
//     right: {
//         val: 3
//     }
// }))