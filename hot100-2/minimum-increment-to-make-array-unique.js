/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let unProcessNumber = 0,
    moveNumber = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      unProcessNumber++;
      moveNumber -= nums[i];
    } else {
      let canProcessNumber = Math.min(
        unProcessNumber,
        nums[i + 1] - nums[i] - 1
      );
      moveNumber +=
        canProcessNumber * nums[i] +
        ((1 + canProcessNumber) * canProcessNumber) / 2;
      unProcessNumber -= canProcessNumber;
    }
  }

  if (unProcessNumber > 0) {
    moveNumber +=
      unProcessNumber * nums[nums.length - 1] +
      ((unProcessNumber + 1) * unProcessNumber) / 2;
  }

  return moveNumber;
};

// console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
