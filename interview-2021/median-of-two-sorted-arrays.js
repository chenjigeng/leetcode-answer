/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let size = nums1.length + nums2.length;
  if (size % 2 === 0) {
    return (
      (findTarget(nums1, nums2, size / 2 + 1) +
        findTarget(nums1, nums2, size / 2)) /
      2
    );
  }

  return findTarget(nums1, nums2, (size - 1) / 2 + 1);
};

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 */
function findTarget(nums1, nums2, k) {
  let nums1Left = 0,
    nums1Right = nums1.length - 1,
    nums2Left = 0,
    nums2Right = nums2.length - 1;

  while (true) {
    const mid1 = Math.floor((nums1Left + nums1Right) / 2),
      mid2 = Math.floor((nums2Left + nums2Right) / 2);

    if (nums1Left > nums1Right) {
      return nums2[k - (nums1Right + 1) - 1];
    } else if (nums2Left > nums2Right) {
      return nums1[k - (nums2Right + 1) - 1];
    }

    if (nums1[mid1] < nums2[mid2]) {
      if (mid1 + mid2 + 2 <= k) {
        nums1Left = mid1 + 1;
      } else {
        nums2Right--;
      }
    } else {
      if (mid1 + mid2 + 2 <= k) {
        nums2Left = mid2 + 1;
      } else {
        nums1Right--;
      }
    }
  }
}

// (nums1 = [1, 3]), (nums2 = [2]);
// (nums1 = [1, 2]), (nums2 = [3, 4]);
// (nums1 = [0, 0]), (nums2 = [0, 0]);
// (nums1 = [1]), (nums2 = [2, 3, 4]);

// console.log(findMedianSortedArrays(nums1, nums2));
