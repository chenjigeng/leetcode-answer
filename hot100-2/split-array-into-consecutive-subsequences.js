/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const map = {},
    tail = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }

    map[nums[i]]++;
    tail[nums[i]] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      if (tail[nums[i] - 1]) {
        tail[nums[i]]++;
        tail[nums[i] - 1]--;
        map[nums[i]]--;
      } else if (map[nums[i] + 1] && map[nums[i] + 2]) {
        map[nums[i]]--;
        map[nums[i] + 1]--;
        map[nums[i] + 2]--;
        tail[nums[i] + 2]++;
      } else {
        return false;
      }
    }
  }

  return true;
};

// console.log(isPossible([1, 2, 3, 4, 6, 7, 8, 9, 10, 11]));
