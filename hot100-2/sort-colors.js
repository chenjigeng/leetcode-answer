/**
 * 输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let startIndex = 0,
        endIndex = nums.length - 1;

    while (startIndex < endIndex) {
        if (nums[startIndex] !== 0) {
            while (nums[endIndex] !== 0 && startIndex < endIndex) {
                endIndex--;
            }

            if (startIndex < endIndex && nums[endIndex] === 0) {
                [nums[endIndex], nums[startIndex]] = [
                    nums[startIndex],
                    nums[endIndex],
                ];
                endIndex--;
            }
        }

        startIndex++;
    }

    (startIndex = 0), (endIndex = nums.length - 1);

    while (startIndex < endIndex) {
        if (nums[endIndex] !== 2) {
            while (nums[startIndex] !== 2 && startIndex < endIndex) {
                startIndex++;
            }

            if (startIndex < endIndex && nums[startIndex] === 2) {
                [nums[endIndex], nums[startIndex]] = [
                    nums[startIndex],
                    nums[endIndex],
                ];
                startIndex++;
            }
        }

        endIndex--;
    }

    // console.log(nums);
};

// sortColors([2, 0, 2, 1, 1, 0]);
