/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
    result.map((item) => {
      result.push([...item, nums[i]]);
    });
  }

  // console.log(result);

  return result;
};

// console.log(subsets([1, 2, 3, 4, 5, 6, 7, 8, 10, 0]));
// console.log(subsets([0]));
// console.log(subsets([1, 2, 3]));
// [[], [1]]
// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// [[], [1], [2], [3]]
// [[], [1], [2], [3], [1, 2], [1, 3], [2, 3]]
