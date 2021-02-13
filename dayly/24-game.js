const operator = [(a, b) => a + b, (a, b) => a - b, (a, b) => a / b, (a, b) => a * b];


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    const result = [nums];

    while(result.length > 0) {
        const top = result.pop();
        console.log(result);

        if (top.length === 1) {
            if (top === 24) return true;
            continue;
        }

        for (let i = 0; i < top.length; i++) {
            for (let j = 0; j < top.length; j++) {
                if (i === j) continue;
                const leftNum = top[i];
                const rightNum = top[j];

                const restArr = [...top];
                restArr.splice(restArr.indexOf(leftNum), 1);
                restArr.splice(restArr.indexOf(rightNum), 1);
                for (let k = 0; k < operator.length; k++) {
                    result.push([...restArr, operator[k](leftNum, rightNum)]);
                }
            }
        }
    }
};


console.log(judgePoint24([4, 1, 8, 7]));