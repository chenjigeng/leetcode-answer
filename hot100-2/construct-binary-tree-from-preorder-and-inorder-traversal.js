/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }

    const top = preorder[0];

    const midIndex = inorder.findIndex((item) => item === top);

    const leftInorder = inorder.slice(0, midIndex),
        rightInOrder = inorder.slice(midIndex + 1),
        leftPreOrder = preorder.slice(1, midIndex + 1),
        rightPreOrder = preorder.slice(midIndex + 1);

    const node = {
        val: top,
        left: null,
        right: null,
    };

    node.left = buildTree(leftPreOrder, leftInorder);
    node.right = buildTree(rightPreOrder, rightInOrder);

    return node;
};
