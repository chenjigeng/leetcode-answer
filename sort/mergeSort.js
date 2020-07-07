/**
 *
 *
 * @param {Array} arr
 * @returns
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

/**
 *
 *
 * @param {Array} left
 * @param {Array} right
 */
function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return result.concat(left, right);
}

// console.log(mergeSort(
//   [5,2,3,1]));