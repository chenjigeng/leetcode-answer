/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (
      nums[current - 1] === current &&
      i !== current - 1 &&
      !result.includes(current)
    ) {
      result.push(current);
    }

    while (nums[current - 1] !== current) {
      let next = nums[current - 1];
      nums[current - 1] = current;
      current = next;

      if (nums[current - 1] === current && !result.includes(current)) {
        result.push(current);
      }
    }

    nums[i] = current;
  }

  // console.log(result);
  return result;
};

// findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
