/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const r = []
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        nums[num - 1] = nums[num - 1] < 0 ? nums[num - 1] : -nums[num - 1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            r.push(i + 1)
        }
    }

    // console.log(r);
    return r;
};

// findDisappearedNumbers([4,3,2,7,8,2,3,1]);