/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let obj;
var findFrequentTreeSum = function(root) {
  obj = {};
  helper(root);
  let max = 0;
  for (let key in obj) {
    max = Math.max(max, obj[key]);
  }

  const arr = [];
  for (let key in obj) {
    if (obj[key] === max) {
      arr.push(+key);
    }
  }

  return arr;
};


function helper(root) {
  if (!root) return 0;
  const sum = helper(root.left) + helper(root.right) + root.val;
  if (!obj[sum]) {
    obj[sum] = 0;
  }
  obj[sum]++;

  return sum;
}

// console.log(findFrequentTreeSum({
//   val: 5,
//   left: {
//     val: 2,
//   }, 
//   right: {
//     val: -3
//   }
// }))