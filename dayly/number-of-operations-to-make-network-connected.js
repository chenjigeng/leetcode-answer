class UnionSet {
  constructor(n) {
    this.parent = new Array(n).fill(1).map((_, index) => index);
    this.sizes = new Array(n).fill(1);
    this.setCount = n;
  }

  findSet(n) {
    while (n !== this.parent[n]) {
      n = this.parent[n];
    }

    return n;
  }

  union(a, b) {
    let x = this.findSet(a),
      y = this.findSet(b);

    if (x === y) {
      return false;
    }

    if (this.sizes[x] < this.sizes[y]) {
      [x, y] = [y, x];
    }

    this.parent[y] = x;
    this.sizes[x] += this.sizes[y];
    this.setCount--;
  }

  connected(a, b) {
    let x = this.findSet(a),
      y = this.findSet(b);

    return x === y;
  }
}

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (n - 1 > connections.length) {
    return -1;
  }
  const set = new UnionSet(n);
  for (let [x, y] of connections) {
    set.union(x, y);
  }

  return set.setCount - 1;
};
// /**
//  * @param {number} n
//  * @param {number[][]} connections
//  * @return {number}
//  */
// var makeConnected = function(n, connections) {
//     if (n > connections.length + 1) {
//         return -1;
//     }
//    const edges = new Map();

//    for (let [x, y] of connections) {
//        !edges.has(x) ? edges.set(x, [y]) : edges.set(x, [...edges.get(x), y]);
//        !edges.has(y) ? edges.set(y, [x]) : edges.set(y, [...edges.get(y), x]);
//    }

//    const used = {};

//    const dfs = (n) => {
//     if (used[n]) {
//         return;
//     }
//        used[n] = true;

//         const e = edges.get(n);

//         if (!e) return;

//         for (let i of e) {
//             if (!used[i]) {
//                 dfs(i);
//             }
//         }
//    }

//    let ans = 0;

//    for (let i = 0; i < n; i++) {
//        if (!used[i]) {
//            dfs(i);
//            ans++;
//        }
//    }

//    return ans - 1;
// };

// (n = 4),
//   (connections = [
//     [0, 1],
//     [0, 2],
//     [1, 2],
//   ]);

// console.log(makeConnected(n, connections));
