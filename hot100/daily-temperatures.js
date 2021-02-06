/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = [];

    const map = {};

    for (let i = T.length - 1; i >= 0; i--) {
        const num = T[i];
        map[num] = i;
        let index = 100000;

        for (let j = num + 1; j < 101; j++) {
            if (map[j]) {
                index = Math.min(map[j], index);
            }
        }

        result[i] = index === 100000 ? 0 : index - i;
    }


    // console.log(result);
    return result;
};

// dailyTemperatures([73,74,75,71,69,72,76,73])