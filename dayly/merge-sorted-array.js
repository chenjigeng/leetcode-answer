/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m + n - 1; i >= n; i--) {
    nums1[i] = nums1[i - n];
  }

  let leftIndex = n,
    rightIndex = 0,
    index = 0;

  while (leftIndex < m + n && rightIndex < n) {
    if (nums1[leftIndex] > nums2[rightIndex]) {
      nums1[index++] = nums2[rightIndex++];
    } else {
      nums1[index++] = nums1[leftIndex++];
    }
  }

  if (leftIndex >= m + n) {
    for (let i = rightIndex; i < n; i++) {
      nums1[index++] = nums2[i];
    }
  } else {
    for (let i = leftIndex; i < m + n; i++) {
      nums1[index++] = nums1[i];
    }
  }
};

// (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);

// (nums1 = [1]), (m = 1), (nums2 = []), (n = 0);
// merge(nums1, m, nums2, n);
