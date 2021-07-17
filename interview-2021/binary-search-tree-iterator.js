/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.nodes = [];

  const stack = [];

  stack.push({
    node: root,
    visited: false,
  });

  while (stack.length) {
    const top = stack.pop();

    const { node, visited } = top;

    if (!node) continue;

    if (visited) {
      if (node) {
        this.nodes.push(node.val);
      }
      continue;
    }

    stack.push({
      node: node.right,
      visited: false,
    });
    stack.push({
      node: node,
      visited: true,
    });
    stack.push({
      node: node.left,
      visited: false,
    });
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.nodes.shift();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.nodes.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// const a = new BSTIterator({
//   val: 7,
//   left: {
//     val: 3,
//   },
//   right: {
//     val: 15,
//     left: {
//       val: 9,
//     },
//     right: {
//       val: 20,
//     },
//   },
// });
