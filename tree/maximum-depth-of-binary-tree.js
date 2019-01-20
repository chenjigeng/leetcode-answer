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
var maxDepth = function(root) {
  if (!root) return 0;
  const stack = [{
    node: root,
    depth: 1,
  }];
  let max = 0;
  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.depth > max) {
      max = currentNode.depth;
    }
    if (currentNode.node.left) {
      stack.push({
        node: currentNode.node.left,
        depth: currentNode.depth + 1,
      });
    }

    if (currentNode.node.right) {
      stack.push({
        node: currentNode.node.right,
        depth: currentNode.depth + 1,
      });
    }
  }

  return max;
};

const root = {
  left: {
  },
  right: {
    left: {

    },
    right: {

    }
  }
}

console.log(maxDepth(root));