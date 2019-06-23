/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const len = Math.floor(nums.length / 3);
  let x = -1, y = -1, xCount = 0, yCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] === x || xCount === 0) && nums[i] !== y) {
      x = nums[i];
      xCount++;
    } else if (nums[i] === y || yCount === 0) {
      y = nums[i];
      yCount++;
    } else {
      xCount--;
      yCount--;
    }
  }

  let countX = 0, countY = 0;
  for (let i = 0; i < nums.length; i++) {
    if (x === nums[i]) {
      countX++;
    }
    if (y === nums[i]) {
      countY++;
    }
  }
  const results = [];
  if (countX > len) {
    results.push(x);
  }
  if (countY > len && x !== y) {
    results.push(y);
  }

  return results;
};

console.log(majorityElement([1,2,2,3,2,1,1,3]));