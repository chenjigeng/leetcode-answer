/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  const results = [];
  const length = nums.length;

  nums = nums.sort((a, b) => a - b);

  // console.log(nums)

  for (let i = 0; i < length - 2; i++) {
    let first = i;
    let mid = first + 1;
    let last = length - 1;

    // console.log([nums[first], nums[mid], nums[last]]);

    while (mid < last) {
      let result = nums[first] + nums[mid] + nums[last];

      // console.log([nums[first], nums[mid], nums[last]]);
      if (result === 0) {
        results.push([nums[first], nums[mid], nums[last]]);
        while (mid < last && nums[last] === nums[--last]) {}
        while (mid < last && nums[mid] === nums[++mid]) {}
      } else if (result > 0) {
        while (mid < last && nums[last] === nums[--last]) {}
      } else if (result < 0) {
        while (mid < last && nums[mid] === nums[++mid]) {}
      }
    }

    // console.log(nums[i]);
    while(nums[i] === nums[i + 1]) i++;
  }

  return results;
};

// console.log(threeSum([-2,0,0,2,2]))
// console.log(threeSum([-1,0,1,2,-1,-4]));