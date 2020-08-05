/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    
    for (let i = 0; i < nums.length; i++) {
        let len = result.length;
        for (let j = 0; j < len; j++) {
            result.push([...result[j], nums[i]]);
        }
    }

    // console.log(result);
    return result;
};

// /**
//  * 
//  * @param {number[]} nums 
//  * @param {number} index
//  * @param {number[]} result
//  */
// function helper(nums, index, result, depth) {
//     if (index === depth) {
//         result.push(nums.slice(0, index));
//         return;
//     }

//     for (let i = index; i < nums.length; i++) {
//         [nums[i], nums[index]] = [nums[index], nums[i]];
//         helper(nums, index + 1, result, depth);
//         [nums[i], nums[index]] = [nums[index], nums[i]];
//     }
// }

// console.log(subsets([1, 2, 3]));

// [] => [] [1] => [] [2] [1] [1, 2] => []