/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const arr = [];
  const queue = [root];
  while (queue.length > 0) {
    const top = queue.shift();
    if (!top) {
      arr.push(null);
    } else {
      arr.push(top.val);
      queue.push(top.left);
      queue.push(top.right);
    }
  }

  console.log('arr', arr);

  return JSON.stringify(arr);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = JSON.parse(data);
  if (arr.length <= 0) return null;
  const root = {
    val: arr.shift(),
    left: null,
    right: null,
  };

  const queue = [root]

  while (queue.length) {
    const top = queue.shift();
    const leftVal = arr.shift();
    if (leftVal) {
      const leftNode = {
        val: leftVal,
        left: null,
        right: null,
      };

      top.left = leftNode;

      queue.push(leftNode);
    }
    const rightVal = arr.length > 0 && arr.shift();
    if (rightVal) {
      const rightNode = {
        val: leftVal,
        left: null,
        right: null,
      };

      top.right = rightNode;

      queue.push(rightNode);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */