/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          break;
        }
      }
      const newArr = nums.slice(i + 1);
      newArr.sort((a, b) => a - b);
      for (let j = i + 1; j < nums.length; j++) {
        nums[j] = newArr[j - i - 1];
      }
      console.log("nums", nums);
      return;
    }
  }

  // console.log(nums);

  nums.sort((a, b) => a - b);
};

// console.log(nextPermutation([2, 3, 1]));
// console.log(nextPermutation([1, 3, 2]));
// nextPermutation([1, 2, 3]);
