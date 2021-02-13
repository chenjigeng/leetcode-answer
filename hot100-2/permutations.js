/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];

    const backTracking = (index) => {
        if (index === nums.length) {
            result.push([...nums]);
            return;
        }
        for (let i = index; i < nums.length; i++) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            backTracking(index + 1);
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    };

    backTracking(0);

    // console.log(result);
    return result;
};

// permute([1, 2, 3]);
