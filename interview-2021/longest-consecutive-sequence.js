/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    }
  }

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i] - 1]) {
      continue;
    }

    let item = nums[i];

    while (map[item]) {
      item++;
    }

    count = Math.max(count, item - nums[i]);
  }

  return count;
};
