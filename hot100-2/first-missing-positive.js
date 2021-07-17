/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let originLength = nums.length;
  for (let i = 0; i < originLength; i++) {
    let cur = nums[i];
    if (cur >= 0) {
      while (nums[cur] !== cur && cur >= 0) {
        let next = nums[cur];
        nums[cur] = cur;
        cur = next;
      }
    }
  }

  let i = 1;

  for (; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return i;
};

// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));
// console.log(firstMissingPositive([1]));
// console.log(firstMissingPositive([2147483647]));
