/**
 * 回溯算法一定要做好 cache，记录已有的结果，不然基本会超时。
 * https://leetcode-cn.com/problems/wildcard-matching/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const patterns = p;

    let filtetPattern = '';

    for (let i = 0; i < p.length;) {
        if (patterns[i] === '*') {
            const token = patterns[i];
            for (i; i < patterns.length; i++) {
                if (patterns[i] !== token) {
                    break;
                }
            }
            filtetPattern += token;
        } else {
            filtetPattern += patterns[i++];
        }
    }

    const visited = [];

    for (let i = 0; i <= s.length; i++) {
        visited[i] = []
        for (let j = 0; j <= p.length; j++) {
            visited[i][j] = undefined;
        }
    }


    // console.log(filtetPattern);
    
    return helper(s, filtetPattern, 0, 0, visited);
};



/**
 * 
 * @param {string} s 
 * @param {string} p 
 */
function helper(s, p, i, j, visited) {

    if (visited[i][j] !== undefined) {
        return visited[i][j];
    }

    if (i === s.length || j === p.length)  {
        if (i === s.length) {
            if (j === p.length) {
                visited[i][j] = true;
                return true;
            }

            for (let k = j; k < p.length; k++) {
                if (p[k] !== '*') {
                    visited[i][j] = false;
                    return false;
                }
            }

            visited[i][j] = true;

            return true;
        }

        visited[i][j] = false;

        return false;
    }
    if (s[i] === p[j] || p[j] === '?') {
        visited[i][j] = helper(s, p, i + 1, j + 1, visited);
        return visited[i][j];
    }

    if (p[j] === '*') {
        visited[i][j] = helper(s, p, i + 1, j + 1, visited) || helper(s, p, i, j+1, visited) || helper(s, p, i + 1, j, visited)
        return visited[i][j];
    }

    visited[i][j] = false;


    return false;
}

// console.log(isMatch('aa', '*'));
// console.log(isMatch('aa', 'a'));
// console.log(isMatch('acdcb', 'a*c?b'));
// console.log(isMatch('adceb', '*a*b'));
// console.log(isMatch('', '*'));

// console.log(isMatch("babaaababaabababbbbbbaabaabbabababbaababbaaabbbaaab", "***bba**a*bbba**aab**b"));

// a = "bbaaaabaaaaabbabbabbabbababaabababaabbabaaabbaababababbabaabbabbbbbbaaaaaabaabbbbbabbbbabbabababaaaaa"
// b = "******aa*bbb*aa*a*bb*ab***bbba*a*babaab*b*aa*a****"

// console.log(isMatch(a, b));