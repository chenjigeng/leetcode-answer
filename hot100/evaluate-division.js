/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const map = {}

    for (let i = 0; i < equations.length; i++) {
        const str = equations[i];
        const start = str[0], end = str[1];
        const value = values[i];

        if (!map[start]) {
            map[start] = {}
        }

        if(!map[end]) {
            map[end] = {}
        }

        map[start][end] = value;
        map[end][start] = 1 / value;
    }

    const result = [];

    for (let [start, end] of queries) {
        result.push(findPath(start, end, map));
    }

    // console.log(result);

    return result;
};

/**
 * 
 * @param {string} start 
 * @param {string} end 
 * @param {Record<string, Record<string, number>>} map
 * @returns {number}
 */
function findPath(start, end, map) {
    const visited = {}
    const stack = [{
        val: 1,
        key: start,
    }];

    while (stack.length) {
        const top = stack.pop();
        if (visited[top.key]) continue;
        visited[top.key] = true;

        const m = map[top.key];

        for (let e in m) {
            if (e === end) {
                return m[e] * top.val;
            }

            stack.push({
                val: m[e] * top.val,
                key: e,
            })
        }
    }
    
    return -1;
}

// calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]])
// calcEquation([["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]])
