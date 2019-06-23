/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const copy = [];
  matrix.map(row => copy.push([...row]));
  for (let c = 0; c < matrix.length; c++) {
    for (let r = 0; r < matrix[0].length; r++) {
      matrix[r][c] = copy[matrix.length - c - 1][r];
    }
  }

  // console.log(matrix);

};

// rotate([
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ])