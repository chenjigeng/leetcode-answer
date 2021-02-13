/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        count += check(s, i, i);
        count += check(s, i, i + 1);
    }

    return count;
};

/**
 * 
 * @param {string} s 
 * @param {number} l 
 * @param {number} r 
 */
function check(s, l, r) {
    let count = 0;
    while (l >= 0 && r < s.length) {
        if (s[l] === s[r]) {
            count++;
            l--;
            r++;
        } else {
            return count;
        }
    }

    return count;
}