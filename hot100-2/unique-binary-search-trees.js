/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (nn) {
    const map = {};
    const helper = (n) => {
        if (map[n]) return map[n];
        if (n === 1 || n === 0) {
            return 1;
        }

        let result = 0;

        for (let i = 1; i <= n; i++) {
            result += helper(n - i) * helper(i - 1);
        }

        map[n] = result;

        return result;
    };

    return helper(nn);
};

// numTrees(3);
