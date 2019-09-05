/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let ma = nums[0], mi = nums[0], max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [ma, mi] = [mi, ma];
    }
    ma = Math.max(ma * nums[i], nums[i]);
    mi = Math.max(mi * nums[i], nums[i]);

    max = Math.max(ma, mi);
  }

  return max;
};

// console.log(maxProduct([2, 3, -2, 6]))
// console.log(maxProduct([-2, 0, -1]))
