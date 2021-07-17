/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }

    map[nums[i]]++;
  }

  const arr = [];

  for (let key in map) {
    arr.push({
      key: +key,
      count: map[key],
    });
  }

  arr.sort((a, b) => b.count - a.count);

  return arr.slice(0, k).map((item) => item.key);
};
