/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = [];
    for (let i = 0; i <= word1.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= word2.length; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = 0; i < word2.length; i++) {
        dp[0][i + 1] = i + 1;
    }

    for (let i = 0; i < word1.length; i++) {
        dp[i + 1][0] = i + 1;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            const top = dp[i - 1][j], left = dp[i][j - 1], left_top = dp[i - 1][j - 1];

            if (word2[j - 1] === word1[i - 1]) {
                dp[i][j] = Math.min(top, left, left_top - 1) + 1;
            } else {
                dp[i][j] = Math.min(top, left, left_top) + 1;
            }
        }
    }

    // console.log(dp);
    return dp[word1.length][word2.length];
};

// minDistance('horse', 'ros')