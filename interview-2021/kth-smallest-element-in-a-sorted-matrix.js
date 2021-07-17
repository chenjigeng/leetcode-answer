/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let result = [];

  if (matrix.length % 2 !== 0) {
    matrix.push([]);
  }

  while (matrix.length > 1) {
    for (let i = 0; i < matrix.length; i += 2) {
      result.push(mergeTwo(matrix[i], matrix[i + 1]));
    }

    matrix = result;
    result = [];
  }

  // console.log(matrix);

  return matrix[0][k - 1];
};

// (matrix = [
//   [1, 5, 9],
//   [10, 11, 13],
//   [12, 13, 15],
// ]),
//   (k = 8);

// kthSmallest(matrix, k);
/**
 *
 * @param {number[]} A
 * @param {number[]} B
 */
function mergeTwo(A, B) {
  if (!A) return B;
  if (!B) return A;
  const result = [];

  let i = 0,
    j = 0;

  for (; i < A.length && j < B.length; ) {
    if (A[i] < B[j]) {
      result.push(A[i]);
      i++;
    } else {
      result.push(B[j]);
      j++;
    }
  }

  if (i === A.length) {
    result.push(...B.slice(j));
  } else {
    result.push(...A.slice(i));
  }

  return result;
}
