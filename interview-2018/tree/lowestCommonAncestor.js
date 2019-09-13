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
var lowestCommonAncestor = function(root, p, q) {
	let node;
	function helper(root, p, q) {
		if (!root) return 0;
		let current = 0;
	
		const left = helper(root.left, p, q);
		const right = helper(root.right, p, q);
	
		if (root === p || root === q) {
			current = 1;
		}
	
		if (left + right + current >= 2) {
			node = root;
		}
	
		return left || right || current;
	}

	helper(root, p, q);

	return node;
};

