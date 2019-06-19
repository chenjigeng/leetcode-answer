/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const num = Math.floor(nums.length / 2);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    if (map[nums[i]] > num) {
      return nums[i];
    }
  }
};

console.log((majorityElement([3,2,3])));