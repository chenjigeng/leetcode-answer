/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    const index = getFirstOne(result);
    const item = 1 << (index - 1);

    let first = 0, second = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & item) > 0) {
            first ^= nums[i];
        } else {
            second ^= nums[i];
        }
    }

    return [first, second];

};

/**
 * 
 * @param {number} num 
 */
function getFirstOne(num) {
    let mark = 1;
    let index = 0;
    while (num) {
        index++;
        if ((mark & num) === 1) {
            return index;
        }
        num >>= 1;
    }
    return index;
}

// singleNumber([1,2,1,3,2,5])
// singleNumber([-1638685546,-2084083624,-307525016,-930251592,-1638685546,1354460680,623522045,-1370026032,-307525016,-2084083624,-930251592,472570145,-1370026032,1063150409,160988123,1122167217,1145305475,472570145,623522045,1122167217,1354460680,1145305475])