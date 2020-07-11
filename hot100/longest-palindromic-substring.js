/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = []

    for (let i = 0; i < s.length; i++) {
        dp[i] = [];

        for (let j = 0; j < s.length; j++) {
            dp[i][j] = false;
        }
        
        dp[i][i] = true;
    }

    let leftIndex = 0, rightIndex = 0;

    for (let step = 1; step < s.length; step++) {
        for (let j = 0; j + step < s.length; j++) {
            if (s[j] === s[j  + step] && (j + 1 > j + step - 1 || dp[j + 1][j + step - 1])) {
                dp[j][j + step] = true;
                leftIndex = j;
                rightIndex = j + step;
            }
        }
    }

    return s.slice(leftIndex, rightIndex + 1);
};

// console.log(longestPalindrome('cbbd'));