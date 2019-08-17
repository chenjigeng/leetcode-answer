const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const hasUsed = [[]];
let isExist = false;

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  reset(board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        // console.log(hasUsed);
        hasUsed[i][j] = true;
        backTracking(board, word, i, j, 0);
        hasUsed[i][j] = false;
        // console.log(hasUsed);
        if (isExist) return true;
      }
    }
  }

  return false;
};

function reset(board) {
  isExist = false;
  for (let i = 0; i < board.length; i++) {
    hasUsed[i] = []
    for (let j = 0; j < board[i].length; j++) {
      hasUsed[i][j] = false;
    }
  }
}

function backTracking(board, word, row, col, index,) {
  if (isExist) return;
  if (index === word.length - 1) {
    isExist = true;
    return;
  }

  for (let i = 0; i < direction.length; i++) {
    const nextRow = row + direction[i][0];
    const nextCol = col + direction[i][1];
    if (checkCanAdd(board, word, nextRow, nextCol, index + 1)) {
      hasUsed[nextRow][nextCol] = true;
      backTracking(board, word, nextRow, nextCol, index + 1);
      hasUsed[nextRow][nextCol] = false;
    }
  }
}

function checkCanAdd(board, word, row, col, index) {
  if (row >= board.length || row < 0 || col < 0 || col >= board[row].length) {
    return false;
  }

  return !hasUsed[row][col] && board[row][col] === word[index];
}

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// console.log(exist(board, 'ABCCED'));
// console.log(exist(board, 'SEE'));
// // console.log(exist(board, 'ABCB'));

// board = [["a","a"]]
// console.log(exist(board, 'aaa'));
// "aaa"