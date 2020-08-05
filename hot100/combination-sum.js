/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    return helper(candidates, target, 0);
};

/**
 * 
 * @param {number[]} candidates 
 * @param {number} target 
 * @param {map} cached 
 * @returns {number[][]}
 */
function helper(candidates, target, index) {
    if (target < 0) return [];
    if (target === 0) return [[]];
    const result = [];

    for (let i = index; i < candidates.length; i++) {
        const r = helper(candidates, target - candidates[i], i);
        if (r) {
            r.map(item => {
                result.push([candidates[i], ...item]);
            });
        }
    }

    return result;
}