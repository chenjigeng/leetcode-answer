class UnionSet {
    constructor(num) {
        this.num = 0;
        this.sets = [];
        this.parents = [];
    }

    add(x) {
        if (this.parents[x] === undefined) {
            this.parents[x] = x;
            this.sets[x] = 1;
            this.num++;
        }
    }

    findParent(x) {
        while (this.parents[x] !== x) {
            x = this.parents[x];
        }

        return x;
    }

    union(x, y) {
        let xParent = this.findParent(x),
            yParent = this.findParent(y);

        if (xParent === yParent) return;

        if (this.sets[yParent] > this.sets[xParent]) {
            [xParent, yParent] = [yParent, xParent];
        }

        this.parents[yParent] = xParent;

        this.sets[xParent]++;
        this.num--;
    }
}

const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const set = new UnionSet(grid.length * grid[0].length);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== "1") {
                continue;
            }
            set.add(i * grid.length + j);
            for (let k = 0; k < directions.length; k++) {
                const newI = i + directions[k][0],
                    newJ = j + directions[k][1];

                if (
                    newI >= 0 &&
                    newI < grid.length &&
                    newJ >= 0 &&
                    newJ < grid[0].length
                ) {
                    if (grid[newI][newJ] !== "1") continue;

                    set.add(newI * grid.length + newJ);
                    set.union(i * grid.length + j, newI * grid.length + newJ);
                }
            }
        }
    }

    return set.num;
};

// console.log(
//     numIslands([
//         ["1", "1", "0", "0", "0"],
//         ["1", "1", "0", "0", "0"],
//         ["0", "0", "1", "0", "0"],
//         ["0", "0", "0", "1", "1"],
//     ])
// );
