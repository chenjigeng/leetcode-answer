/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [];

    const helper = (cur = [], last = []) => {
        result.push(cur);
        if (last.length === 0) return;

        for (let i = 0; i < last.length; i++) {
            helper([...cur, last[i]], [...last.slice(i + 1)]);
        }
    };

    helper([], nums);

    // console.log(result);
    return result;
};

// subsets([1, 2, 3]);
