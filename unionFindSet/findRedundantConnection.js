/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const unionSet = new UnionFind(edges.length);
  unionSet.union(edges[0][0]-1, edges[0][1] - 1);
  let res;
  for (let i = 1; i < edges.length; i++) {
    const [a, b] = edges[i];
    if (unionSet.find(a - 1) === unionSet.find(b - 1)) {
      res = [a, b];
    } else {
      unionSet.union(a - 1, b - 1);
    }
  }

  return res;
};

class UnionFind {
  constructor(length) {
    this.parent = [];
    this.rank = [];

    for (let i = 0; i < length; i++) {
      this.parent[i] = i;
      this.rank[i] = i;
    }
  }

  find(a) {
    while (a !== this.parent[a]) {
      a = this.parent[a];
    }

    return a;
  }

  union(a, b) {
    const pa = this.find(a);
    const pb = this.find(b);

    if (this.rank[pa] > this.rank[pb]) {
      this.parent[pb] = pa;
      rank[pa]++;
    } else if (this.rank[pa] < this.rank[pb]) {
      this.parent[pa] = pb;
      this.rank[pb]++;
    } else {
      this.parent[pa] = pb;
      this.rank[pb]++;
    }
  }
}

findRedundantConnection(
[[1,2],[1,3],[2,3]])