/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
	if (!pNode) return null;
	if (pNode.right !== null) {
		let pNode = pNode.right;
		while (pNode && pNode.left != null) {
			pNode = pNode.left;
		}

		return pNode;
	} else {
		while (pNode !== null) {
			if (pNode.next && pNode.next.left === pNode) {
				return pNode.next;
			}

			pNode = pNode.next;
		}

		return pNode;
	}

	return null;
    // write code here
}