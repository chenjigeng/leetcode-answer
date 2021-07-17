const letterMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
};

// ["a", "b", "c"][("d", "e", "f")];
/**
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    let result = letterMap[digits[0]];

    for (let i = 1; i < digits.length; i++) {
        const currentLetters = letterMap[digits[i]];

        let newResult = [];

        result.map((item) => {
            currentLetters.map((newLetter) => {
                newResult.push(item + newLetter);
            });
        });

        result = newResult;
    }

    // console.log(result);

    return result;
};

// letterCombinations("23");
