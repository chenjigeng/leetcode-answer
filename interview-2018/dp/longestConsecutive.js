/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = {};
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = 1;
  }
  
  for (let key in map) {
    let num = +key;
    if (map[num - 1]) {
      continue;
    }

    let len = 0;
    while (map[num]) {
      len++;
      num++;
    }
    max = Math.max(len, max);
  }

  return max;
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([1, 2, 0, 1]));
