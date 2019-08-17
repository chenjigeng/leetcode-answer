const cols = [];
const rows = [];
const dale = [];
const hill = [];

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  init(n);
  const result = [];
  backTracking(result, n, 0);

  return result.length;
};

function init(n) {
  for (let i = 0; i < n; i++) {
    cols[i] = 0;
    rows[i] = 0;
  }

  for (let i = 0; i < dale.length; i++) {
    dale[i] = 0;
  }

  for (let j = 0; j < hill.length; j++) {
    hill[j] = 0;
  }
}

function backTracking(result, n, row) {
  if (row === n) {
    result.push(0);
    return;
  }

  for (let c = 0; c < n; c++) {
    if (checkCanPlace(row, c)) {
      rows[row] = 1;
      cols[c] = 1;
      dale[row - c] = 1;
      hill[row + c ] = 1;
      backTracking(result, n, row + 1);
      rows[row] = 0;
      cols[c] = 0;
      dale[row - c] = 0;
      hill[row + c] = 0;
    }
  }
}

function checkCanPlace(row, col) {
  return !rows[row] && !cols[col] && dale[row - col] !== 1 && hill[row + col] !== 1;
}

// console.log(solveNQueens(4))
// console.log(totalNQueens(4));