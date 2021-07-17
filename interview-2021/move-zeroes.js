/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      const nextIndex = nums.findIndex((item, index) => {
        if (item !== 0 && index > i) {
          return true;
        }
      });

      if (nextIndex > -1) {
        [nums[i], nums[nextIndex]] = [nums[nextIndex], nums[i]];
      } else {
        return;
      }
    }
  }
};
