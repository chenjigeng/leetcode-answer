/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      let cur = nums[i],
        index = i;

      while (cur !== nums[cur]) {
        let next = nums[cur];
        nums[cur] = cur;
        cur = next;
      }

      if (cur === undefined) {
        return index;
      }
    }
  }
};

// missingNumber([0, 1, 3]);
// [1, 1, 2, 3]
