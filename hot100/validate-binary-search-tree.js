/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return inorder(root, []);
};

function inorder(root, result) {
    if (!root) return true;


    if (!inorder(root.left, result)) {
        return false;
    }

    if (result.length === 0 || result[result.length - 1] < root.val) {
        result.push(root.val)
    } else {
        return false;
    }

    return inorder(root.right, result);
}

// [10,5,15,null,null,6,20]

// const root = {
//     val: 10,
//     left: {
//         val: 5,
//     },
//     right: {
//         val
//     }
// }