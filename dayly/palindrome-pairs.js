/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j) {
                if (isPalindrome(words[i] + words[j])) {
                    result.push([i, j]);
                }
            }
        }
    }

    // console.log(result);
    return result;
};

// console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]));
/**
 * 
 * @param {string} s 
 */
function isPalindrome(s) {
    let start = 0, end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// console.log(isPalindrome('aba'))
// console.log(isPalindrome('ab'))