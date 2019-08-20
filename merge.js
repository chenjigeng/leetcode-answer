/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, index = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[index--] = nums2[j--];
    } else {
      nums1[index--] = nums1[i--];
    }
  }

  if (j >= 0) {
    for (let p = 0; p <= j; p++) {
      nums1[p] = nums2[j-p];
    }
  }

  return nums1;
};

// function back(arr, index, endIndex) {
//   for (let i = endIndex - 1; i > index; i--) {
//     arr[i] = arr[i-1];
//   }
// }

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// 
// console.log(merge([0], 0, [1], 1))