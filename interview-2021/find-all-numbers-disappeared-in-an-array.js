/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];

    while (item !== nums[item - 1] && item !== i + 1) {
      let next = nums[item - 1];
      nums[item - 1] = item;
      item = next;
    }

    nums[i] = item;
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      result.push(i + 1);
    }
  }

  return result;
};

// findDisappearedNumbers([2, 1]);
