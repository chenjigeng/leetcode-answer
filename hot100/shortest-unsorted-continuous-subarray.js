/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const newNums = [...nums];
    newNums.sort((a, b) => a - b);
    let leftCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === newNums[i]) {
            leftCount++;
        } else {
            break;
        }
    }

    let rightCount = 0;


    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] === newNums[j]) {
            rightCount++;
        } else {
            break;
        }
    }

    return nums.length - rightCount - leftCount >= 0 ? nums.length - rightCount - leftCount : 0;

};