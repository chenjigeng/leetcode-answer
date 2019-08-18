const directions = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  // const mark = [[]];
  const queue = [];
  // const weights = [[]];
  for (let i = 0; i < matrix.length; i++) {
    // weights[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        queue.push({
          row: i,
          col: j,
          weight: 0,
        });
      } else {
        matrix[i][j] = 1000000;
      }
    }
  }

  // for (let i = 0; i < matrix.length; i++) {
  //   mark[i] = [];
  //   weights[i] = [];
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     mark[i][j] = 0;
  //     weights[i][j] = 0;
  //   }
  // }


  while (queue.length > 0) {
    const { row, col } = queue.pop();

    for (let i = 0; i < directions.length; i++) {
      const nextRow = row + directions[i][0], nextCol = col + directions[i][1];
      let newWeight;
      if (nextRow >= 0 && nextCol >= 0 && nextRow < matrix.length && nextCol < matrix[nextRow].length) {
        if (matrix[row][col] + 1 < matrix[nextRow][nextCol]) {
          matrix[nextRow][nextCol] = matrix[row][col] + 1;
          queue.push({
            row: nextRow,
            col: nextCol,
          });
        }
        // if (matrix[nextRow][nextCol]) {
        //   if (weights[nextRow][nextCol] > 0) {
        //     newWeight = Math.min(weight + 1, weights[nextRow][nextCol]);
        //   } else {
        //     newWeight = weight + 1;
        //   }
        // } else {
        //   newWeight = 0;
        // }
        // weights[nextRow][nextCol] = newWeight;
        // queue.push({
        //   row: nextRow,
        //   col: nextCol,
        //   weight: newWeight,
        // });
      }
    }
  }

  return matrix;
};

// console.log(updateMatrix([
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 1, 1]
// ]));