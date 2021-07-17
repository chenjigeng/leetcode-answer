/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const dp = [];

    let result = s.length > 0 ? s[0] : "";

    for (let i = 0; i < s.length; i++) {
        dp[i] = [];

        for (let j = 0; j < s.length; j++) {
            dp[i][j] = false;
        }

        dp[i][i] = true;
    }

    for (let step = 1; step < s.length; step++) {
        for (let j = 0; j < s.length; j++) {
            if (
                s[j] === s[j + step] &&
                (step === 1 || dp[j + 1][j + step - 1])
            ) {
                if (step + 1 > result.length) {
                    result = s.slice(j, j + step + 1);
                }
                dp[j][j + step] = true;
            }
        }
    }

    // console.log(dp, result);
    return result;
};

// longestPalindrome("cbbd");
