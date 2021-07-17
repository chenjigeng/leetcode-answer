/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let start = nums.length,
    end = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        start = Math.min(start, i);
        end = Math.max(end, j);
      }
    }
  }

  return end - start > 0 ? end - start + 1 : 0;
};

// console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsortedSubarray([1, 2, 3, 4]));
// console.log(findUnsortedSubarray([1]));
