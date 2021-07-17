/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let leftIndex = 0,
    rightIndex = nums.length - 1;

  while (leftIndex < rightIndex) {
    if (nums[leftIndex] !== 0) {
      while (nums[rightIndex] !== 0) {
        rightIndex--;
      }

      if (leftIndex < rightIndex && nums[rightIndex] === 0) {
        [nums[leftIndex], nums[rightIndex]] = [
          nums[rightIndex],
          nums[leftIndex],
        ];
        leftIndex++;
        rightIndex--;
      }
    } else {
      leftIndex++;
    }
  }

  (leftIndex = 0), (rightIndex = nums.length - 1);

  while (leftIndex < rightIndex) {
    if (nums[rightIndex] !== 2) {
      while (nums[leftIndex] !== 2) {
        leftIndex++;
      }

      if (leftIndex < rightIndex && nums[leftIndex] === 2) {
        [nums[leftIndex], nums[rightIndex]] = [
          nums[rightIndex],
          nums[leftIndex],
        ];
        leftIndex++;
        rightIndex--;
      }
    } else {
      rightIndex--;
    }
  }

  return nums;
};
