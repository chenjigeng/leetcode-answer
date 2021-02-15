/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0,
        col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        const current = matrix[row][col];

        if (current < target) {
            row++;
        } else if (current > target) {
            col--;
        } else {
            return true;
        }
    }

    return false;
};
