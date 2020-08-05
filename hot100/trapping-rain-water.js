/**
 * stupid
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     let count = 0;


//     for (let left = 0; left < height.length - 1;) {
//         let startIndex = left;
//         let max = -1, maxIndex = -1;
//         for (let i = left + 1; i < height.length; i++) {
//             if (height[left] > height[i] && height[i] >= max) {
//                 max = height[i];
//                 maxIndex = i;
//             }
//             if (height[i] >= height[left]) {
//                 const min = Math.min(height[i], height[left]);
//                 for (let k = left + 1; k < i; k++) {
//                     count += min - height[k];
//                 }
//                 left = i;
//             }
//         }

//         // 在这个区域他最高
//         if (startIndex === left && maxIndex !== -1) {
//             for (let k = left + 1; k < maxIndex; k++) {
//                 count += max - height[k];
//             }
//             left = maxIndex;
//         }
//     }

//     // console.log(count);
//     return count;
// };

// trap([0,1,0,2,1,0,1,3,2,1,2,1])
// trap([4, 2, 3])
// trap([5,4,1,2])
// trap([6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3])


var trap = function(height) {
    const leftMax = [height[0]], rightMax = [];

    rightMax[height.length - 1] = height[height.length - 1];
    
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // console.log(leftMax, rightMax);
    let count = 0;

    for (let i = 1; i < height.length - 1; i++) {
        count += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    // console.log(count);

    return count;
};

// trap([0,1,0,2,1,0,1,3,2,1,2,1])