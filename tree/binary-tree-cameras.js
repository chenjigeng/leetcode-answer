/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const STATUS = {
  SEE_BY_PARENT: 0,
  SEE_BY_CHILDREN: -1,
  SEE_BY_SELF: 1,
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
  const result = helper(root);
    
  if (root.status === STATUS.SEE_BY_SELF || (root.left && root.left.status === STATUS.SEE_BY_SELF) || (root.right && root.right.status === STATUS.SEE_BY_SELF)) {
    return result;
  }

  return result + 1;
};

function helper(root) {
  if (!root) return 0;
  if (root.left === null && root.right === null) {
    root.status = STATUS.SEE_BY_PARENT;
    return 0;
  }
  let result = helper(root.left) + helper(root.right);

  let needAddCamera = false;
  let status = STATUS.SEE_BY_PARENT;

  if (root.left) {
    if (root.left.status === STATUS.SEE_BY_PARENT) {
      needAddCamera = true;
    } else if (root.left.status === STATUS.SEE_BY_SELF) {
      status = STATUS.SEE_BY_CHILDREN;
    }
  }

  if (root.right) {
    if (root.right.status === STATUS.SEE_BY_PARENT) {
      needAddCamera = true;
    } else if (root.right.status === STATUS.SEE_BY_SELF) {
      status = STATUS.SEE_BY_CHILDREN;
    }
  }

  if (needAddCamera) {
    result++;
    status = STATUS.SEE_BY_SELF;
  }

  root.status = status;

  return result;
}