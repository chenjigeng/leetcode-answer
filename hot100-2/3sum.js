/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  if (nums[nums.length - 1] > 0) {
    return [];
  }

  // console.log(nums);

  for (let i = 0; i < nums.length - 2; ) {
    if (nums[i] > 0) break;
    for (let j = i + 1; j < nums.length - 1; ) {
      if (nums[i] + nums[j] > 0) {
        break;
      }

      let target = -(nums[i] + nums[j]);

      for (let k = j + 1; k < nums.length; ) {
        if (target === nums[k]) {
          result.push([nums[i], nums[j], nums[k]]);

          k++;

          while (nums[k] === nums[k - 1]) {
            k++;
          }
        } else {
          k++;
        }
      }

      j++;

      while (nums[j] === nums[j - 1]) {
        j++;
      }
    }

    i++;

    while (nums[i] === nums[i - 1]) {
      i++;
    }
  }

  // console.log(result);

  return result;
};

// threeSum([-1, 0, 1, 2, -1, -4]);
