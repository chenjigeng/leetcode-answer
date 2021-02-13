/**
 * [4,5,2,6,3,1]
 * [4,5,3,1,2,6]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let targetIndex = 0;
    let find = false;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (find) break;
        if (nums[i - 1] < nums[i]) {
            targetIndex = i;

            for (let j = nums.length - 1; j >= targetIndex; j--) {
                if (nums[j] > nums[targetIndex - 1]) {
                    [nums[j], nums[targetIndex - 1]] = [
                        nums[targetIndex - 1],
                        nums[j],
                    ];
                    find = true;
                    break;
                }
            }
        }
    }

    for (
        let index = 0, i = targetIndex;
        i < (nums.length - targetIndex) / 2 + targetIndex;
        i++, index++
    ) {
        [nums[i], nums[nums.length - index - 1]] = [
            nums[nums.length - index - 1],
            nums[i],
        ];
    }

    // while (targetIndex < nums.length) {
    //     if (nums[targetIndex] > nums[targetIndex + 1]) {
    //         [nums[targetIndex], nums[targetIndex + 1]] = [
    //             nums[targetIndex + 1],
    //             nums[targetIndex],
    //         ];
    //     }
    //     targetIndex++;
    // }

    // console.log(nums);

    return nums;
};

// console.log(nextPermutation([1, 2, 3]));
// console.log(nextPermutation([4, 5, 2, 6, 3, 1]));
// console.log(nextPermutation([1, 3, 2]));
// console.log(nextPermutation([3, 2, 1]));
