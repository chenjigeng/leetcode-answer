function mergeSort(arr) {
  if (start.length <= 1) return arr;
  const mid = Math.floor((start + end) / 2);

  return merge(mergeSort(arr.slice(start, mid)), mergeSort(arr.slice(mid)));
}

/**
 *
 *
 * @param {Array} left
 * @param {Array} right
 */
function merge(left, right) {
  const leftLength = left.length, rightLength = right.length, leftIndex = 0, rightIndex = 0;
  const result = [];

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  if (leftIndex < leftLength) {
    result.push(...left.slice(leftIndex));
  } else {
    result.push(...right.slice(rightIndex));
  }

  return result;
}