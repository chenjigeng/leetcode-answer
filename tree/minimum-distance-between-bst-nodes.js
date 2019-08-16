/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let temp1 = -100, temp2 = -100, min = 2000;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  inorder(root);

  const m = min;
  temp1 = -100, temp2 = -100, min = 2000;
  return m;
};

function inorder(r) {
  if (!r) return;

  if (r.left) {
    inorder(r.left);
  }

  
  temp1 = temp2;
  temp2 = r.val;

  min = Math.min(min, temp2 - temp1);

  if (r.right) {
    inorder(r.right);
  }
}


// console.log(minDiffInBST({
//   val: 1,
//   left: {
//     val: 0,
//   },
//   right: {
//     val: 48,
//     left: {
//       val: 12,
//     },
//     right: {
//       val: 49
//     }
//   }
// }))