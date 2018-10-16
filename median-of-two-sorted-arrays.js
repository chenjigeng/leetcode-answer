/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 * 两个排序数组的中位数
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const targetIndex = Math.ceil((nums1.length + nums2.length) / 2) - 1;
  const odd = (nums1.length + nums2.length) % 2 === 1;
  let nums1Index = 0, nums2Index = 0, index = 0;
  while (index++ < targetIndex) {
    if (nums1Index === nums1.length) {
      nums2Index++;
      continue;
    } else if (nums2Index === nums2.length) {
      nums1Index++;
      continue;
    }
    if (nums1[nums1Index] < nums2[nums2Index]) {
      nums1Index++;
    } else {
      nums2Index++;
    }
  }
  // 如果nums1数组遍历完了，说明中位数肯定在nums2数组上
  if (nums1Index === nums1.length) {
    if (odd) {
      return nums2[nums2Index];
    } else {
      return (nums2[nums2Index] + nums2[nums2Index + 1 ]) / 2;
    }
  } else if (nums2Index === nums2.length) {
    if (odd) {
      return nums1[nums1Index];
    } else {
      return (nums1[nums1Index] + nums1[nums1Index + 1 ]) / 2;
    }
  }

  if (odd) {
    if (nums1[nums1Index] < nums2[nums2Index]) {
      return nums1[nums1Index];
    }
    return nums2[nums2Index];
  } else {
    // nums1 = [1,2,5] 
    // nums2 = [1,2,5]
    let result = 0;
    for (let i = 0; i < 2; i++) {
      if (nums1Index === nums1.length) {
        result += nums2[nums2Index++];
      } else if (nums2Index === nums2.length) {
        result += nums1[nums1Index++];
      } else if (nums1[nums1Index] < nums2[nums2Index]) {
        result += nums1[nums1Index];
        nums1Index++;
      } else {
        result += nums2[nums2Index];
        nums2Index++;
      }
    }
    return result / 2;
  }
};

nums1 = [1, 3]
nums2 = [2]

console.log(findMedianSortedArrays(nums1, nums2));