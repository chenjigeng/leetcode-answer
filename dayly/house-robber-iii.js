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
var rob = function(root) {
    const cached = new Map();
    return helper(root, false, cached)
};



/**
 * 
 * @param {*} root 
 * @param {boolean} skip 
 * @param {Map} cached 
 */
function helper(root, skip, cached) {
    if (!root) {
        return 0;
    }

    if (skip) {
        return helper(root.left, false, cached) + helper(root.right, false, cached);
    }

    if (cached.get(root) !== undefined) {
        return cached.get(root);
    }
    let current = root.val + helper(root.left, true, cached) + helper(root.right, true, cached);

    let other = helper(root.left, false, cached) + helper(root.right, false, cached);

    cached.set(root, Math.max(current, other));
    return  cached.get(root);
}


// const root = {
//     val: 3,
//     left: {
//         val: 4,
//         left: {
//             val: 1,
//         },
//         right: {
//             val: 3,
//         }
//     },
//     right: {
//         val: 5,
//         right: {
//             val: 1
//         }
//     }
// }

// console.log(rob(root));
