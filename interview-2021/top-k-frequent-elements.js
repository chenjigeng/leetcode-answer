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

  const result = [];

  for (let key in map) {
    result.push({
      key,
      value: map[key],
    });
  }

  return result
    .sort((a, b) => b.value - a.value)
    .filter((item, index) => {
      if (index < k) {
        return true;
      }
    })
    .map((item) => +item.key);
};
