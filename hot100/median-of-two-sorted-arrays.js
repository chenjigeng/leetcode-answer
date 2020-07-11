/**
 * 二分的思想，不过是对 k 进行二分
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mid = Math.floor((nums1.length + nums2.length) / 2);

    if ((nums1.length + nums2.length) % 2 === 0) {
        return (findMedianSortedArrays(nums1, nums2, mid) + findMedianSortedArrays(nums1, nums2, mid + 1)) / 2;
    }

    return findMedianSortedArrays(nums1, nums2, mid + 1);
};

// nums1 = [1, 2]
// nums2 = [3, 4]
// findMedianSortedArrays(nums1, nums2)

function findNum(nums1, nums2, k) {
    let nums1Offset = 0, nums2Offset = 0;

    while (true) {
        if (nums1Offset === nums1.length) {
            return nums2[nums2Offset + k - 1];
        }
        
        if (nums2Offset === nums2.length) {
            return nums1[nums1Offset + k - 1];
        }

        if (k === 1) {
            return Math.min(nums1[nums1Offset], nums2[nums2Offset]);
        }

        const half = Math.floor(k / 2);
        const newIndex1 = Math.min(half + nums1Offset, nums1.length) - 1;
        const newIndex2 = Math.min(half + nums2Offset, nums2.length) - 1;

        if (nums1[newIndex1] <= nums2[newIndex2]) {
            k -= (newIndex1 - nums1Offset + 1);
            nums1Offset = newIndex1 + 1;
        } else {
            k -= (newIndex2 - nums2Offset + 1);
            nums2Offset = newIndex2 + 1;
        }
    }
}