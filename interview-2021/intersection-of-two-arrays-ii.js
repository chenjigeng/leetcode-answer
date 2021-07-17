/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {};

  nums1.map((item) => {
    if (!map[item]) {
      map[item] = 0;
    }

    map[item]++;
  });

  return nums2.filter((item) => {
    if (map[item]) {
      map[item]--;
      return true;
    }

    return false;
  });
};
