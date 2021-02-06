/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let count = 0;

    function dfs(node, sumList) {
        if (!node) return;

        const newSumList = [];

        for (let i = 0; i < sumList.length; i++) {
            newSumList.push(sumList[i] + node.val);
        }

        newSumList.push(node.val);

        console.log(node, newSumList);

        for (let i of newSumList) {
            if (i === sum) {
                count++;
            }
        }

        dfs(node.left, newSumList)
        dfs(node.right, newSumList);
    }

    dfs(root, []);

    return count;
};

// const root = {
//     val: 1,
//     left: {
//         val: -2,
//     },
//     right: {}
// }

// const root = {
//     val: 10,
//     left: {
//         val: 5,
//         left: {
//             val: 3,
//             left: {
//                 val: 3,
//             },
//             right: {
//                 val: -2
//             }
//         },
//         right: {
//             val: 2,
//             right: {
//                 val: 1,
//             }
//         }
//     },
//     right: {
//         val: -1,
//         right: {
//             val: 11
//         }
//     }
// }
// console.log(pathSum(root, 8));
