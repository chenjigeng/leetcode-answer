/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0;
    const map = {};
    let sum = 0;
    map[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (map[sum - k]) {
            result += map[sum - k];
        }

        if (!map[sum]) {
            map[sum] = 0;
        }

        map[sum]++;
    }

    // console.log(result);

    return result;
};

// subarraySum([1,1,1], 2)