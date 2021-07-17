/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];

    while (item !== i + 1) {
      let cur = nums[item - 1];
      if (cur === item) {
        return cur;
      }
      nums[item - 1] = item;
      item = cur;
    }

    nums[i] = item;
  }
};

// nums = [1, 3, 4, 2, 2];

// console.log(findDuplicate(nums));
