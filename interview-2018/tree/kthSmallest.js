/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(root, k) {
// 	let cur = root;
// 	const stack = [];

// 	while (cur || stack.length > 0) {
// 		while (cur) {
// 			stack.push(cur);
// 			cur = cur.left;
// 		}
// 		const tmp = stack.pop();
		
// 		k--;

// 		if (k === 0) return tmp;
		
// 		if (tmp.right) {
// 			cur = tmp.right;
// 		}
// 	}
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(root, k) {
// 	const leftCount = LDR(root);
// 	if (leftCount === k - 1) return root.val;
// 	else if (leftCount > k) {
// 		return kthSmallest(root.left, k);
// 	} else {
// 		return kthSmallest(root.right, k - leftCount - 1);
// 	}
// };

// function LDR(root) {
// 	if (!root) return 0;
// 	const leftCount = LDR(root.left);
// 	const rightCount = LDR(root.right);

// 	return leftCount + 1 + rightCount;
// }

var kthSmallest = function(root, k) {
	let val;

	function helper(root) {
		if (!root) return;
		helper(root.left);
		k--;
		if (k === 0) {
			val = root.val;
			return;
		}

		helper(root.right);
	}

	helper(root);
	
	return val;
};
