/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0]
        }

        return a[1] - b[1];
    })

    const result = [];

    for (let i = 0; i < people.length; i++) {
        const [height, index] = people[i];

        result.splice(index, 0, people[i]);
    }

    // console.log(people);

    // console.log(result);
    
    return result;
};
// var reconstructQueue = function(people) {
    // people.sort((a, b) => {
    //     if (a[0] !== b[0]) {
    //         return a[0] - b[0]
    //     }

    //     return a[1] - b[1];
    // })

//     // console.log(people);

//     const result = [];

//     for (let i = 0; i < people.length; i++) {
//         result[i] = undefined;
//     }

//     for (let i = 0; i < people.length; i++) {
//         let [height, large] = people[i];

//         for (let j = 0; j < people.length; j++) {
//             if (!result[j] || result[j][0] >= height) {
//                 large--;
//             }

//             if (large === -1) {
//                 result[j] = people[i];
//                 break;
//             }
//         }
//     }

//     // console.log(result);

//     return result;

// };

// const arr = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]


// console.log(reconstructQueue(arr));