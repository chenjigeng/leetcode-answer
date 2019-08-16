/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;

  return recursive(nums, 0, nums.length - 1);
};

function recursive(arr, start, end) {
  if (start > end) return null;
  if (start === end) return {
    val: arr[start],
    left: null,
    right: null,
  };
  const mid = Math.floor((start + end) / 2);
  const root = {
    val: arr[mid],
    left: null,
    right: null,
  };
  root.left = recursive(arr, start, mid - 1);
  root.right = recursive(arr, mid + 1, end);
  return root;
}


// console.log(sortedArrayToBST([-10,-3,0,5,9]));