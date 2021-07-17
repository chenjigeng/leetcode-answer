/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  const map = {};

  map[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map[sum - k]) {
      count += map[sum - k];
    }

    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  // console.log(count);
  return count;
};

// (nums = [1, 1, 1]), (k = 2);
// subarraySum(nums, k);

// (nums = [1, 2, 3]), (k = 3);
// subarraySum(nums, k);
