/**
 * nums = [100,4,200,1,3,2]
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }

    let max = 0;

    for (let key in map) {
        if (map[key - 1]) {
            continue;
        }

        let cur = 0;

        let currentKey = key;

        while (map[currentKey++]) {
            cur++;
        }

        max = Math.max(max, cur);
    }

    return max;
};

// longestConsecutive([100, 4, 200, 1, 3, 2]);
