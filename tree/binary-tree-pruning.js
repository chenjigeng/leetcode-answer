/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var pruneTree = function(root) {
//   if (!root) return null;
//   if (!contain1(root.left)) {
//     root.left = null;
//   }

//   if (!contain1(root.right)) {
//     root.right = null;
//   }

//   return root;
// };

// function contain1(root) {
//   if (!root) return false;
//   const leftHasOne = contain1(root.left);
//   const rightHasOne = contain1(root.right);
    
//   if (!leftHasOne) {
//       root.left = null;
//   }
    
//     if (!rightHasOne) {
//         root.right = null;
//     }

//   if (root.val === 1) return true;


//   return leftHasOne || rightHasOne;

// }
  

var pruneTree = function(root) {
  if (root === null) return false;

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (root.val === 0 && root.left === null && root.right === null) {
    return null;
  }

  return root;
};
// const root = {
//   val: 1,
//   left: {
//     val: 0,
//     left: {
//       val: 0,
//     },
//     right: {
//       val: 0,
//     }
//   },
//   right: {
//     val: 1,
//     left: {
//       val: 0,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 1,
//       left: null,
//       right: null,
//     }
//   }
// }

// console.log(pruneTree(root));