const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
]

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const visited = [];
    const entry = [];
    const stack = [];

    for (let i = 0; i < board.length; i++) {
        visited[i] = []
        for (let j = 0; j < board[0].length; j++) {
            visited[i][j] = false;
            if (word[0] === board[i][j]) {
                entry.push({
                    x: i,
                    y: j,
                    visited: false,
                    index: 0,
                });
            }
        }
    }

    while (entry.length > 0) {
        stack.push(entry.pop());

        while (stack.length > 0) {
            const current = stack[stack.length - 1];
            if (current.index + 1 === word.length) {
                return true;
            }
            if (current.visited) {
                stack.pop();
                visited[current.x][current.y] = false;
                continue;
            }
            current.visited = true;
            visited[current.x][current.y] = true;

            for (let i = 0; i < directions.length; i++) {
                const nextX = current.x + directions[i][0], nextY = current.y + directions[i][1];

                if (nextX >= 0 && nextX < board.length && nextY >= 0 && nextY < board[0].length && board[nextX][nextY] === word[current.index + 1] && !visited[nextX][nextY]) {
                    if (current.index + 1 === word.length) {
                        return true;
                    }
                    stack.push({
                        x: nextX,
                        y: nextY,
                        visited: false,
                        index: current.index + 1,
                    });
                }
            }
        }
    }

    return false;
};

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// word = "ABCCED"
// word = "SEE"
// word = "ABCB"

// console.log(exist([["a"]],"a"))

// console.log(exist(board, word));