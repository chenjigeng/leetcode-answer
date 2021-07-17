const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (word[0] === board[i][j]) {
        if (find(board, i, j, word)) {
          return true;
        }
      }
    }
  }

  return false;
};
/**
 * @param {character[][]} board
 * @param {number} i
 * @param {number} j
 * @param {string} word
 * @return {boolean}
 */
function find(board, i, j, word) {
  const map = [];

  for (let i = 0; i < board.length; i++) {
    map[i] = [];

    for (let j = 0; j < board[0].length; j++) {
      map[i][j] = false;
    }
  }

  const stack = [
    {
      x: i,
      y: j,
      index: 0,
      visited: false,
    },
  ];

  while (stack.length) {
    const { x, y, index, visited } = stack.pop();

    if (!visited) {
      map[x][y] = true;
      stack.push({
        x,
        y,
        index,
        visited: true,
      });
    } else {
      map[x][y] = false;
      continue;
    }

    if (index === word.length - 1) return true;

    for (let i = 0; i < directions.length; i++) {
      const nextX = x + directions[i][0],
        nextY = y + directions[i][1];

      if (
        nextX >= 0 &&
        nextX < board.length &&
        nextY >= 0 &&
        nextY < board[0].length &&
        !map[nextX][nextY]
      ) {
        if (board[nextX][nextY] === word[index + 1]) {
          stack.push({
            x: nextX,
            y: nextY,
            visited: false,
            index: index + 1,
          });
        }
      }
    }
  }
}
