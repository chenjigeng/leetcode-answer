/**
 *  (i, j) (j, n - 1 - i) (n - 1 - i, n - 1 - j) (n - 1 - j, i) 旋转公式
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    const n = len;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        for (let j = 0; j < len / 2; j++) {
            const temp = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};
