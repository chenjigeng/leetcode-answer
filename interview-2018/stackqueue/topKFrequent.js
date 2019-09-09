/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!map[num]) {
      map[num] = 0;
    }

    // console.log(num);
    map[num] = map[num] + 1;
  }

  // console.log(map);

  const arr = [];

  for (let key in map) {
    arr.push({
      key,
      num: map[key],
    });
  }

  arr.sort((a, b) => b.num - a.num);

  // console.log(arr);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(+arr[i].key);
  }

  // console.log(result);
  return result;
};

// topKFrequent([-1, -1], 1)
// topKFrequent([1,1,1,2,2,3], 2);