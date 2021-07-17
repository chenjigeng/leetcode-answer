/**
 *
 * @param {number[]} arr
 */
function countNumber(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] || i === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(countNumber([1, 5, 7, 7, 8, 9, 9]));
