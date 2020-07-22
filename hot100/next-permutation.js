/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let find = false;
    let index = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            find = true;
            index = i;
            break;
        }
    }


    if (find) {
        for (let j = nums.length - 1; j > index; j--) {
            if (nums[j] > nums[index]) {
                const target = nums[j];
                nums[j] = nums[index];
                nums[index] = target;
                let left = index + 1, right = nums.length - 1;
    
                while (left < right) {
                    const item = nums[left];
                    nums[left] = nums[right];
                    nums[right] = item;
                    left++;
                    right--;
                }
                break;
            }
        }
    } else {
        nums.reverse();
    }
    // console.log(nums);
    return nums;
};

// console.log(nextPermutation([1, 2, 3]));
// console.log(nextPermutation([3, 2, 1]));
// console.log(nextPermutation([1, 1, 5]));
// console.log(nextPermutation([1, 3, 2])); // 213
