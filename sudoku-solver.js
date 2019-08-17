const rows = [[]];
const cols = [[]];
const boxes = [[]];
const n = 3;
const ROW = 3 * 3;
const COL = 3 * 3;
let done = false;

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  init(board);
  backTracking(board, 0, 0);
};

function init(board) {
  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    cols[i] = []
    for (let j = 0; j < 9; j++) {
      rows[i][j] = 0;
      cols[i][j] = 0;
    }
  }

  for (let i = 0; i < 9; i++) {
    boxes[i] = [];
    for (let j = 0; j < 9; j++) {
      boxes[i][j] = 0;
    }
  }
  done = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        const num = board[i][j];
        addNumber(board, i, j, num);
      }
    }
  }
}

function checkCanPlace(board, row, col, num) {
  const bIndex = Math.floor(row / n) * n + Math.floor(col / n);

  return rows[row][num] !== 1 && cols[col][num] !== 1 && boxes[bIndex][num] !== 1 && board[row][col] === '.';
}

function addNumber(board, row, col, num) {
  rows[row][num] = 1;
  cols[col][num] = 1;
  const bIndex = Math.floor(row / n) * n + Math.floor(col / n);
  boxes[bIndex][num] = 1;
  board[row][col] = num + '';
}

function addOtherNumbers(board, row, col) {
  if (row === ROW - 1 && col === COL - 1) {
    done = true;
    return;
  } else if (col === COL - 1) {
    backTracking(board, row + 1, 0);
  } else {
    backTracking(board, row, col + 1);
  }
}

function removeNumber(board, row, col, num) {
  rows[row][num] = 0;
  cols[col][num] = 0;
  const bIndex = Math.floor(row / n) * n + Math.floor(col / n);
  boxes[bIndex][num] = 0;
  board[row][col] = '.';
}

function backTracking(board, row, col) {
  if (board[row][col] === '.') {
    for (let i = 1; i < 10; i++) {
      if (checkCanPlace(board, row, col, i)) {
        addNumber(board, row, col, i);
        addOtherNumbers(board, row, col);

        if (!done) {
          removeNumber(board, row, col, i);
        }
      }
    }
  } else {
    addOtherNumbers(board, row, col);
  }
}

// const board = [ [ '5', '3', '.', '.', '7', '.', '.', '.', '.' ],
// [ '6', '.', '.', '1', '9', '5', '.', '.', '.' ],
// [ '.', '9', '8', '.', '.', '.', '.', '6', '.' ],
// [ '8', '.', '.', '.', '6', '.', '.', '.', '3' ],
// [ '4', '.', '.', '8', '.', '3', '.', '.', '1' ],
// [ '7', '.', '.', '.', '2', '.', '.', '.', '6' ],
// [ '.', '6', '.', '.', '.', '.', '2', '8', '.' ],
// [ '.', '.', '.', '4', '1', '9', '.', '.', '5' ],
// [ '.', '.', '.', '.', '8', '.', '.', '7', '9' ] ]

// solveSudoku(board);

// console.log('board', board);