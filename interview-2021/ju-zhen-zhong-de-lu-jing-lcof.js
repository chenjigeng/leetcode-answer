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
  const dfs = (i, j) => {
    const map = {};

    for (let i = 0; i < board.length; i++) {
      map[i] = [];
      for (let j = 0; j < board[0].length; j++) {
        map[i][j] = false;
      }
    }

    const stack = [
      {
        x: j,
        y: i,
        visited: false,
        index: 0,
      },
    ];

    while (stack.length > 0) {
      const top = stack.pop();

      if (top.visited) {
        map[top.y][top.x] = false;
        continue;
      }

      if (top.index === word.length - 1) {
        return true;
      }

      stack.push({
        ...top,
        visited: true,
      });

      map[top.y][top.x] = true;

      for (let i = 0; i < directions.length; i++) {
        const nextX = top.x + directions[i][0],
          nextY = top.y + directions[i][1];

        if (
          nextX >= 0 &&
          nextX < board[0].length &&
          nextY >= 0 &&
          nextY < board.length &&
          !map[nextY][nextX]
        ) {
          if (board[nextY][nextX] === word[top.index + 1]) {
            stack.push({
              x: nextX,
              y: nextY,
              visited: false,
              index: top.index + 1,
            });
          }
        }
      }
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j)) return true;
      }
    }
  }

  return false;
};

// (board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"],
// ]),
//   (word = "ABCCED");
// (board = [
//   ["a", "b"],
//   ["c", "d"],
// ]),
//   (word = "abcd");

// board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "E", "S"],
//   ["A", "D", "E", "E"],
// ];
// word = "ABCESEEEFS";
// console.log(exist(board, word));
