/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 *
 *
 * @param {Array} pre
 * @param {Array} vin
 */
function reConstructBinaryTree(pre, vin)
{
	return performReConstructBinaryTree(pre, vin);
    // write code here
}

/**
 *
 *
 * @param {Array} pre
 * @param {Array} vin
 */
function performReConstructBinaryTree(pre, vin) {
	if (pre.length === 0) return null;
	let node = {};
	node.val = pre[0];
	let index = vin.indexOf(pre[0]);
	let leftPre = pre.slice(1, index + 1);
	let rightPre = pre.slice(index + 1);
	let leftVin = vin.slice(0, index);
	let rightVin = vin.slice(index + 1);
	node.left = performReConstructBinaryTree(leftPre, leftVin);
	node.right = performReConstructBinaryTree(rightPre, rightVin);

	return node;
}
