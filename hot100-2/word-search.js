const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];
/**
 * board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const visited = [];

    const startNode = [];

    for (let i = 0; i < board.length; i++) {
        visited[i] = [];
        for (let j = 0; j < board[0].length; j++) {
            visited[i][j] = false;

            if (board[i][j] === word[0]) {
                startNode.push({
                    y: i,
                    x: j,
                    index: 0,
                });
            }
        }
    }

    const dfs = (node) => {
        const stack = [node];
        while (stack.length > 0) {
            const { x, y, index } = stack[stack.length - 1];
            if (index === word.length - 1) {
                return true;
            }
            if (visited[y][x]) {
                visited[y][x] = false;
                stack.pop();
                continue;
            }

            visited[y][x] = true;

            for (let i = 0; i < directions.length; i++) {
                const newX = directions[i][0] + x,
                    newY = directions[i][1] + y;

                if (
                    newX >= 0 &&
                    newX < board[0].length &&
                    newY >= 0 &&
                    newY < board.length &&
                    !visited[newY][newX]
                ) {
                    if (board[newY][newX] === word[index + 1]) {
                        stack.push({
                            x: newX,
                            y: newY,
                            index: index + 1,
                        });
                    }
                }
            }
        }

        return false;
    };

    for (let i = 0; i < startNode.length; i++) {
        if (dfs(startNode[i])) {
            return true;
        }
    }

    return false;
};

// console.log(
//     exist(
//         [
//             ["A", "B", "C", "E"],
//             ["S", "F", "C", "S"],
//             ["A", "D", "E", "E"],
//         ],
//         "ABCCED"
//     )
// );

// console.log(
//     exist(
//         [
//             ["A", "B", "C", "E"],
//             ["S", "F", "C", "S"],
//             ["A", "D", "E", "E"],
//         ],
//         "SEE"
//     )
// );
// console.log(
//     exist(
//         [
//             ["A", "B", "C", "E"],
//             ["S", "F", "C", "S"],
//             ["A", "D", "E", "E"],
//         ],
//         "ABCB"
//     )
// );
