/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  /**
   *
   * @param {number[]} arr
   * @param {number} k
   */
  const pickMax = (arr, k) => {
    const stack = [];
    let deleteCount = arr.length - k;

    for (let i = 0; i < arr.length; i++) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] < arr[i] &&
        deleteCount
      ) {
        stack.pop();
        deleteCount--;
      }

      stack.push(arr[i]);
    }

    return stack.slice(0, k);
  };

  /**
   *
   * @param {number[]} A
   * @param {number[]} B
   */
  const merge = (A, B) => {
    const result = [];
    while (A.length > 0 || B.length > 0) {
      if (A > B) {
        result.push(A.shift());
      } else {
        result.push(B.shift());
      }
    }

    return result;
  };

  let max = [];

  for (let i = 0; i <= k; i++) {
    if (i <= nums1.length && k - i <= nums2.length) {
      let r = merge(pickMax(nums1, i), pickMax(nums2, k - i));
      max = max > r ? max : r;
    }
  }

  return max;
};

// nums1 = [6, 7];
// nums2 = [6, 0, 4];
// k = 5;

// nums1 = [2, 5, 6, 4, 4, 0];
// nums2 = [7, 3, 8, 0, 6, 5, 7, 6, 2];
// k = 15;

// console.log(maxNumber(nums1, nums2, k));
