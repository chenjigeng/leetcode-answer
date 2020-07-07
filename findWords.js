/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const map = [];
  words.sort();

  for (let i = 0; i < board.length; i++) {
    map[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      map[i][j] = false;
    }
  }

  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let find = false;
    for (let j = 0; j < board.length; j++) {
      if (find) break;
      for (let k = 0; k < board[j].length; k++) {
        if (word[0] === board[j][k]) {
          map[j][k] = true;
          if (isOk(word.slice(1), k, j, board, map)) {
            result.push(words[i]);
            find = true;
            map[j][k] = false;
            break;
          }
          map[j][k] = false;
        }
      }
    }
  }

  return result;
};

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

/**
 * @param {character[][]} board
 * @param {string} word
 * @param {number} x
 * @param {number} y
 * @param {number} x
 * @return {boolean}
 */
function isOk(word, x, y, board, map) {
  if (word.length === 0) {
    return true;
  }

  for (let i = 0; i < directions.length; i++) {
    const nextX = x + directions[i][0], nextY = y + directions[i][1];

    if (nextX >= 0 && nextY >= 0 && nextX < board[0].length && nextY < board.length) {
      if (board[nextY][nextX] === word[0] && !map[nextY][nextX]) {
        map[nextY][nextX] = true;
        if (isOk(word.slice(1), nextX, nextY, board, map)) {
          map[nextY][nextX] = false;
          return true;
        }
        map[nextY][nextX] = false;
      }
    }
  }

  return false;
} 

// board =
// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]

// words = ["oath","pea","eat","rain"]

// console.log(findWords(board, words));

// board = [["a","b"],["c","d"]]
// words = ["ab","cb","ad","bd","ac","ca","da","bc","db","adcb","dabc","abb","acb"]

// console.log(findWords(board, words));
