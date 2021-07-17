/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  for (let i = 0; i < matrix.length / 2 && i < matrix[0].length / 2; i++) {
    for (let j = i; j < matrix[0].length - i; j++) {
      result.push(matrix[i][j]);
    }

    for (let j = i + 1; j < matrix.length - i; j++) {
      result.push(matrix[j][matrix[0].length - i - 1]);
    }

    if (matrix.length - 1 - i === i || matrix[0].length - 1 - i === i) break;

    for (let j = matrix[0].length - i - 2; j >= i; j--) {
      result.push(matrix[matrix.length - i - 1][j]);
    }

    for (let j = matrix.length - i - 2; j > i; j--) {
      result.push(matrix[j][i]);
    }
  }

  return result;
};

// console.log(
//   spiralOrder([
//     [1, 11],
//     [2, 12],
//     [3, 13],
//     [4, 14],
//     [5, 15],
//     [6, 16],
//     [7, 17],
//     [8, 18],
//     [9, 19],
//     [10, 20],
//   ])
// );

// console.log(spiralOrder([[7], [9], [6]]));

// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ])
// );
