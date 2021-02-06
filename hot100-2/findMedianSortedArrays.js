/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let length = nums1.length + nums2.length;

  if (length % 2 !== 0) {
    return binary(nums1, nums2, Math.floor(length / 2) + 1);
  }

  return (
    (binary(nums1, nums2, Math.floor(length / 2)) +
      binary(nums1, nums2, Math.floor(length / 2) + 1)) /
    2
  );
};

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 */
function binary(nums1, nums2, k) {
  let offsetA = 0,
    offsetB = 0;

  while (true) {
    if (offsetA === nums1.length) {
      return nums2[offsetB + k - 1];
    } else if (offsetB === nums2.length) {
      return nums1[offsetA + k - 1];
    }

    if (k === 1) {
      return nums1[offsetA] > nums2[offsetB] ? nums2[offsetB] : nums1[offsetA];
    }

    let midA = Math.min(offsetA + Math.floor(k / 2) - 1, nums1.length - 1),
      midB = Math.min(offsetB + Math.floor(k / 2) - 1, nums2.length - 1);

    let targetA = nums1[midA],
      targetB = nums2[midB];

    if (targetA <= targetB) {
      k -= midA - offsetA + 1;
      offsetA = midA + 1;
    } else {
      k -= midB - offsetB + 1;
      offsetB = midB + 1;
    }
  }
}

// (nums1 = [1, 3]), (nums2 = [2]);
// (nums1 = [1, 2]), (nums2 = [3, 4]);
// (nums1 = [0, 0]), (nums2 = [0, 0]);
// (nums1 = [2]), (nums2 = []);
// nums1 = [0, 0, 0, 0, 0];
// nums2 = [-1, 0, 0, 0, 0, 0, 1];
// nums1 = [1];
// nums2 = [2, 3, 4, 5, 6];
// console.log(findMedianSortedArrays(nums1, nums2));
