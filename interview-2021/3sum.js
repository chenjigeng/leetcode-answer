/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    const item = nums[i];
    let leftIndex = i + 1,
      rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
      if (item + nums[leftIndex] + nums[rightIndex] === 0) {
        result.push([item, nums[leftIndex], nums[rightIndex]]);
        leftIndex++;
        while (nums[leftIndex] === nums[leftIndex - 1]) {
          leftIndex++;
        }
        rightIndex--;
        while (nums[rightIndex] === nums[rightIndex + 1]) {
          rightIndex--;
        }
      } else if (item + nums[leftIndex] + nums[rightIndex] > 0) {
        rightIndex--;
      } else {
        leftIndex++;
      }
    }
  }

  // console.log(result);
  return result;
};

// nums = [-1, 0, 1, 2, -1, -4];

// threeSum(nums);
