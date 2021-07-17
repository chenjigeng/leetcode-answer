/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    let mask = 1 << i;
    let count = 0;
    
    for (let j = 0; j < nums.length; j++) {
      if ((nums[j] & mask)) {
        count++;
      }
    }

    if (count % 3 !== 0) {
      result = result | mask;
    }
  }

  return result;
};