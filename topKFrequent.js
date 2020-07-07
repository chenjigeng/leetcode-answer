/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
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
      key,
      value: map[key],
    });
  }

  arr.sort((a, b) => b.value - a.value);
  
  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(arr[i]);
  }

  return result;
};