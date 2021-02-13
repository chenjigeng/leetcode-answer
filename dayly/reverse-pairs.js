/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let n = 0;
    let cur = [];

    for (let i = 0; i < nums.length; i++) {
        let index = findIndex(cur, nums[i]);
        n += cur.length - index;
        insertInSort(cur, nums[i] / 2)
    }

    // console.log(n);
    return n;
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} n 
 */
function insertInSort(nums, n) {
    const index = findIndex(nums, n);
    nums.splice(index, 0, n);
}

/**
 * 找到刚好比它小的数字的位置
 * @param {number[]} nums 
 * @param {number} n 
 */
function findIndex(nums, n) {
    if (nums.length === 0) return 0;
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < n) {
            left = mid + 1;
        } else if (nums[mid] > n) {
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }

    if (nums[left] <= n) {
        return left + 1;
    }

    return left;
}


// const a = [1,3,2,3,1]

// reversePairs(a)

// reversePairs([2,4,3,5,1])