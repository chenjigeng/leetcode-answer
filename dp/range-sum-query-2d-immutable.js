/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.sums = [];
  if (matrix.length === 0) {
    return;
  }
  this.sums.push([]);
  for (let col = 0; col < matrix[0].length; col++) {
    this.sums[0][col] = matrix[0][col];
  }
  for (let row = 1; row < matrix.length; row++) {
    const arr = matrix[row];
    sums[row] = [];
    for (let col = 0; col < arr.length; col++) {
      if 
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    
};

// example
/*给定 matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
*/

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */