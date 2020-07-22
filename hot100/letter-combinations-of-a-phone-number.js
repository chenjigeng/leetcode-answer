const digitsMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    return helper(digits, []);
};

/**
 * 
 * @param {string} digits 
 * @param {string} combination
 * @param {string[]} combinations 
 */
function helper(digits, combinations) {
    if (digits.length === 0) {
        return combinations;
    }

    const letters = digitsMap[digits[0]];
    const result = [];

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < combinations.length; j++) {
            result.push(`${combinations[j]}${letters[i]}`);
        }
    }

    if (combinations.length === 0) {
        result.push(...letters);
    }

    return helper(digits.slice(1), result);
}


// console.log(letterCombinations('23'))