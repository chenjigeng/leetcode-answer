/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const result = [];
  result[nums.length - 1] = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    const target = nums[i];
    const index = findNearNum(nums, i + 1, nums.length - 1, target);
    if (index === -1) {
      result[i] = 0
      continue;
    }
    result[i] = index - i;

    nums.splice(i, 1);
    nums.splice(index, 0, target);
  }

  console.log(result);
  return result;
};

/**
 *
 *
 * @param {Array} nums
 * @param {number} start
 * @param {number} target
 */
function findNearNum(nums, start, end, target) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] >= target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      if (nums[mid + 1] >= target) {
        start = mid;
        break;
      }
      start = mid + 1;      
    }
  }

  if (nums[start] >= target) return -1;
  else return start;

}

// countSmaller([5,2,6,1])
// countSmaller([26,78,27,100,33,67,90,23,66,5,38,7,35,23,52,22,83,51,98,69,81,32,78,28,94,13,2,97,3,76,99,51,9,21,84,66,65,36,100,41])
// log2n