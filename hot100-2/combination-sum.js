/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];

    candidates.sort((a, b) => a - b);

    const map = {};

    const backTracking = (cur = [], index, currentTarget) => {
        if (currentTarget < 0) {
            return;
        }

        if (currentTarget === 0) {
            const key = cur.join(",");
            if (map[key]) {
                return;
            }

            map[key] = true;
            result.push([...cur]);
            return;
        }

        if (index >= candidates.length) {
            return;
        }

        if (candidates[index] <= currentTarget) {
            backTracking(
                [...cur, candidates[index]],
                index,
                currentTarget - candidates[index]
            );
            backTracking(
                [...cur, candidates[index]],
                index + 1,
                currentTarget - candidates[index]
            );
        }

        backTracking([...cur], index + 1, currentTarget);
    };

    backTracking([], 0, target);

    // console.log(result);
    return result;
};

// (candidates = [2, 3, 6, 7]), (target = 7), combinationSum(candidates, target);
