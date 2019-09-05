/**
 * 快排
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return search(nums, k);
};

function search(nums, k) {
  let start = 0, end = nums.length - 1;
  do {
    let position = partition(nums, start, end);
    if (position === k - 1) {
      return nums[position];
    } else {
      if (position < k - 1) {
        start = position + 1;
      } else {
        end = position - 1;
      }
    }
  } while(true)

}

/**
 *
 *
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function partition(nums, start, end) {
  let startIndex = start, endIndex = end;

  const temp = nums[start];
  while (startIndex < endIndex) {
    while (startIndex < endIndex && nums[endIndex] <= temp) endIndex--;
    [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];
    while (startIndex < endIndex && nums[startIndex] >= temp) startIndex++;
    [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];
  }
  nums[startIndex] = temp;

  return startIndex;
}

// const a = [3,2,1,5,6,4], k = 2;
// const arr = [3,2,3,1,2,4,5,5,6], kk = 4;
// console.log(findKthLargest(a, k))
// console.log(findKthLargest(arr, kk))
