/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let tire = new Tire();
  const map = [];
  const res = [];
  for (let i = 0; i < words.length; i++) {
    tire.insert(words[i]);
  }
  for (let i = 0; i < board.length; i++) {
    map[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      map[i][j] = false;
    }
  }
  for (let i = 0; i < board.length; i++) {
    map[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      let str = board[i][j];
      map[i][j] = true;
      DFS(board, tire, res, str, i, j, map);
      map[i][j] = false;
    }
  }

  return [...new Set(res)];
};

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

/**
 * 
 * @param {character[][]} board 
 * @param {Tire} tire 
 * @param {Array<string>} res
 * @param {String} cur
 * @param {number} row 
 * @param {number} col 
 * @param {boolean[][]} used 
 */
function DFS(board, tire, res, cur, row, col, used) {
  if (tire.search(cur)) {
    res.push(cur);
    return;
  }

  if (!tire.prefix(cur)) {
    return;
  }

  for (let i = 0; i < directions.length; i++) {
    const nextRow = row + directions[i][0], nextCol = col + directions[i][1];
    if (nextRow >= 0 && nextRow < board.length && nextCol >= 0 && nextCol <= board[nextRow].length) {
      if (!used[nextRow][nextCol]) {
        used[nextRow][nextCol] = true;
        DFS(board, tire, res, cur + board[nextRow][nextCol], nextRow, nextCol, used);
        used[nextRow][nextCol] = false;
      }
    }
  }
}

class Tire {
  constructor() {
    this.root = {
      nodes: {},
      exist: false,
    };
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.nodes[char]) {
        node.nodes[char] = {
          nodes: {},
          exist: false,
          token: char,
        };
      }
      node = node.nodes[char];
    }

    node.exist = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.nodes[char]) {
        return false;
      }
      node = node.nodes[char];
    }

    return node.exist;
  }

  prefix(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.nodes[char]) {
        return false;
      }
      node = node.nodes[char];
    }

    return true;
  }
}

// words = ["oath","pea","eat","rain"]
// board =
// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]

// board = [['a']]
// words = ['ab']
// board = [["a","b"]]
// words = ["aba"]
// console.log(findWords(board, words));