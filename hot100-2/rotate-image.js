/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let len = matrix.length;

    for (let i = 0; i < (matrix.length - 1) / 2; i++) {
        console.log("enter i", i);
        for (let j = 0; j < matrix.length - 2 * i - 1; j++) {
            let row = i,
                col = i + j;
            let cur = matrix[row][col];
            console.log("enter j", j, row, col);

            for (let k = 0; k < 4; k++) {
                let nextRow = col,
                    nextCol = len - 1 - row;
                let nextCur = matrix[nextRow][nextCol];
                matrix[nextRow][nextCol] = cur;
                cur = nextCur;
                row = nextRow;
                col = nextCol;
            }
        }
    }

    // console.log(matrix);
    return matrix;
};

// rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]);

// rotate([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
// ]);
