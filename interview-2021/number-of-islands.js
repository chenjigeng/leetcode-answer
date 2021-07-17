class UnionSet {
  constructor() {
    this.parents = [];
    this.count = 0;
    this.size = [];
  }

  add(n) {
    if (typeof this.parents[n] === "undefined") {
      this.parents[n] = n;
      this.count++;
      this.size[n] = 1;
    }
  }

  findParent(x) {
    while (this.parents[x] !== x) {
      x = this.parents[x];
    }

    return x;
  }

  union(x, y) {
    const xParent = this.findParent(x),
      yParent = this.findParent(y);

    if (xParent === yParent) {
      return;
    }

    if (this.size[xParent] > this.size[yParent]) {
      this.parents[yParent] = xParent;
      this.size[xParent] += this.size[yParent];
    } else {
      this.parents[xParent] = yParent;
      this.size[yParent] += this.size[xParent];
    }
    this.count--;
  }
}

const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const union = new UnionSet();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== "1") continue;
      union.add(i * grid.length + j);

      for (let d = 0; d < directions.length; d++) {
        const nextX = i + directions[d][0],
          nextY = j + directions[d][1];

        if (
          nextX >= 0 &&
          nextX < grid.length &&
          nextY >= 0 &&
          nextY < grid[0].length &&
          grid[nextX][nextY] === "1"
        ) {
          union.add(nextX * grid.length + nextY);

          union.union(i * grid.length + j, nextX * grid.length + nextY);
        }
      }
    }
  }

  return union.count;
};

// nums = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// nums = [["1", "0", "1", "1", "0", "1", "1"]];

// numIslands(nums);
