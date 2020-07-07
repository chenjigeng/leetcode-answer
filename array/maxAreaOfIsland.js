class UnionSet {
  constructor(len) {
    this.fa = {};
    this.rank = {};
    this.maxRank = 0;
    for (let i = 0; i < len; i++) {
      this.fa[i] = i;
      this.rank[i] = 1;
    }
  }
  findFather(p) {
    while (this.fa[p] !== p) {
      p = this.fa[p];
    }

    return p;
  }
  union(p, q) {
    const fp = this.findFather(p), fq = this.findFather(q);

    if (fp === fq) return;

    if (this.rank[fp] > this.rank[fq]) {
      this.rank[fp] += this.rank[fq];
      this.fa[fq] = fp;
      this.maxRank = Math.max(this.maxRank, this.rank[fp]);
    } else if (this.rank[fq] > this.rank[fp]) {
      this.rank[fq] += this.rank[fp];
      this.fa[fp] = fq;
      this.maxRank = Math.max(this.maxRank, this.rank[fq]);
    } else {
      this.fa[fq] = fp;
      this.rank[fp] += this.rank[fq];
      this.maxRank = Math.max(this.maxRank, this.rank[fp]);
    }
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const unionSet = new UnionSet(grid.length * grid[0].length);
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        max = 1;
        if (i + 1 < grid.length && grid[i + 1][j]) {
          unionSet.union(i * grid[0].length + j, (i + 1) * grid[0].length + j);
        }

        if (j + 1 < grid[0].length && grid[i][j + 1]) {
          unionSet.union(i * grid[0].length + j, i * grid[0].length + j + 1);
        }
      }
    }
  }

  return Math.max(unionSet.maxRank, max);
};

// console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
//   [0,0,0,0,0,0,0,1,1,1,0,0,0],
//   [0,1,1,0,1,0,0,0,0,0,0,0,0],
//   [0,1,0,0,1,1,0,0,1,0,1,0,0],
//   [0,1,0,0,1,1,0,0,1,1,1,0,0],
//   [0,0,0,0,0,0,0,0,0,0,1,0,0],
//   [0,0,0,0,0,0,0,1,1,1,0,0,0],
//   [0,0,0,0,0,0,0,1,1,0,0,0,0]]));