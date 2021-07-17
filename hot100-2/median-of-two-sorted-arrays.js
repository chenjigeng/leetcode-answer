/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if ((nums1.length + nums2.length) % 2 === 0) {
    return (
      (findKthLargest(nums1, nums2, (nums1.length + nums2.length) / 2 + 1) +
        findKthLargest(nums1, nums2, (nums1.length + nums2.length) / 2)) /
      2
    );
  }

  return findKthLargest(
    nums1,
    nums2,
    (nums1.length + nums2.length - 1) / 2 + 1
  );
};

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 */
function findKthLargest(nums1, nums2, k) {
  let nums1Left = 0,
    nums1Right = nums1.length - 1,
    nums2Left = 0,
    nums2Right = nums2.length - 1;
  while (true) {
    const nums1Mid = Math.floor((nums1Left + nums1Right) / 2);
    const nums2Mid = Math.floor((nums2Left + nums2Right) / 2);

    // console.log(nums1Mid, nums2Mid);

    // num1 用完了
    if (nums1Left > nums1Right) {
      return nums2[k - nums1Left - 1];
    } else if (nums2Left > nums2Right) {
      return nums1[k - nums2Left - 1];
    }

    if (nums1Mid + nums2Mid + 2 > k) {
      if (nums1[nums1Mid] < nums2[nums2Mid]) {
        nums2Right = nums2Mid - 1;
      } else {
        nums1Right = nums1Mid - 1;
      }
    } else {
      if (nums1[nums1Mid] < nums2[nums2Mid]) {
        nums1Left = nums1Mid + 1;
      } else {
        nums2Left = nums2Mid + 1;
      }
    }
  }
}

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
