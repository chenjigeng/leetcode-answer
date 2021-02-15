/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let result = null;
    const hasSomething = (node) => {
        if (!node) return 0;

        const leftHas = hasSomething(node.left);
        const rightHas = hasSomething(node.right);
        const nodeIs = node === p || node === q ? 1 : 0;

        if (!result && leftHas + rightHas + nodeIs >= 2) {
            result = node;
        }

        return leftHas + rightHas + nodeIs;
    };

    return hasSomething(root);
};
