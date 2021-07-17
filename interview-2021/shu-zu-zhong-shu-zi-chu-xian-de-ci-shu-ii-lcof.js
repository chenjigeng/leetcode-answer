/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let mask = 1;
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let currentMask = mask << i;
    let currentBitCount = 0;

    for (let i = 0; i < nums.length; i++) {
      currentBitCount += (nums[i] & currentMask) > 0 ? 1 : 0;
    }

    if (currentBitCount % 3 === 1) {
      result |= currentMask;
    }
  }

  return result;
};

// console.log(singleNumber([3, 4, 3, 3]));
