/**
 * 两个数组的交集 II
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/26/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map1 = {};
  for (let i = 0; i < nums1.length; i++) {
    map1[nums1[i]] = (map1[nums1[i]] || 0) + 1;
  }

  const intersectArr = [];
  for (let i = 0; i < nums2.length; i++) {
    if (map1[nums2[i]]) {
      intersectArr.push(nums2[i]);
      map1[nums2[i]]--;
    }
  }

  return intersectArr;
};

const nums1 = [4,9,5], nums2 = [9,4,9,8,4]

console.log(intersect(nums1, nums2));