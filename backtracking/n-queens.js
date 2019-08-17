const cols = [];
const rows = [];
const dale = [];
const hill = [];

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const arr = init(n);
  const result = [];
  backTracking(result, arr, n, 0);

  return result;
};

function init(n) {
  for (let i = 0; i < n; i++) {
    cols[i] = 0;
    rows[i] = 0;
  }
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = '.'.repeat(n);
  }

  for (let i = 0; i < dale.length; i++) {
    dale[i] = 0;
  }

  for (let j = 0; j < hill.length; j++) {
    hill[j] = 0;
  }

  return arr;
}

function backTracking(result, arr, n, row) {
  if (row === n) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i] + '';
    }
    result.push(newArr);
    return;
  }

  for (let c = 0; c < n; c++) {
    if (checkCanPlace(row, c)) {
      const str = arr[row];
      arr[row] = `${str.slice(0, c)}Q${str.slice(c + 1)}`;
      rows[row] = 1;
      cols[c] = 1;
      dale[row - c] = 1;
      hill[row + c ] = 1;
      backTracking(result, arr, n, row + 1);
      arr[row] = str;
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