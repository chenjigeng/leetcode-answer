/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  for (let i = 0; i < Math.floor((matrix.length + 1) / 2); i++) {
    for (let j = i; j < matrix[0].length - i; j++) {
      result.push(matrix[i][j]);
    }

    for (let j = i + 1; j < matrix.length - i; j++) {
      result.push(matrix[j][matrix[0].length - i - 1]);
    }

    for (let j = matrix[0].length - i - 2; j >= i; j--) {
      result.push(matrix[matrix.length - i - 1][j]);
    }

    for (let j = matrix.length - i - 2; j > i; j--) {
      result.push(matrix[j][i]);
    }
  }

  return result;
};

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix));
