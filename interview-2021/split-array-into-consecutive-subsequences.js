/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const map = {};

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = [];
    }

    const selectedItem = map[nums[i] - 1];

    if (selectedItem && selectedItem.length > 0) {
      selectedItem.sort((a, b) => a - b);
      map[nums[i]].push(selectedItem.shift() + 1);
    } else {
      map[nums[i]].push(1);
    }
  }

  for (let key in map) {
    if (Array.isArray(map[key])) {
      if (map[key].find((item) => item < 3)) {
        return false;
      }
    }
  }

  return true;
};

// console.log(isPossible([1, 2, 3, 3, 4, 5]));
// console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]));
// console.log(isPossible([1, 2, 3, 4, 4, 5]));
