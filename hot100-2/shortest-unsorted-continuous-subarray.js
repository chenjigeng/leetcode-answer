/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let min = nums[0],
    max = nums[0];

  let leftIndex, rightIndex;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      leftIndex = 0;
      rightIndex = i;
    } else if (nums[i] < max) {
      let j = i - 1;
      while (j >= 0 && nums[j] > nums[i]) {
        j--;
      }

      if (leftIndex === undefined) {
        leftIndex = j + 1;
        rightIndex = i;
      } else {
        leftIndex = Math.min(leftIndex, j + 1);
        rightIndex = i;
      }
    }

    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  console.log(leftIndex, rightIndex);

  if (leftIndex === undefined) {
    return 0;
  }

  return rightIndex - leftIndex + 1;
};

// findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);
// findUnsortedSubarray([1, 2, 3, 4]);
// findUnsortedSubarray([2, 1]);
// findUnsortedSubarray([1]);
// findUnsortedSubarray([2, 3, 3, 2, 4]);
// findUnsortedSubarray([1, 3, 5, 4, 2]);
