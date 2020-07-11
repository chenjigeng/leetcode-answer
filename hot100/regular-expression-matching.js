/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return helper(s, p, 0, 0, {});
};

/**
 * 
 * @param {string} s 
 * @param {string} p 
 * @param {number} sIndex 
 * @param {number} pIndex 
 * @param {object} cached 
 */
function helper(s, p, sIndex, pIndex, cached) {
    const key =`${sIndex}_${pIndex}`; 

    if (sIndex === s.length || pIndex === p.length) {
        if (sIndex === s.length) {
            if (pIndex === p.length) {
                cached[key] = true;
            } else {
                if ((p.length - pIndex) % 2 !== 0) {
                    cached[key] = false;
                    return cached[key];
                }
                for (let j = pIndex + 1; j < p.length; j += 2) {
                    if (p[j] !== '*') {
                        cached[key] = false;
                        return cached[key];
                    }
                }

                cached[key] = true;
            }
        } else {
            cached[key] = false;
            return cached[key];
        }
    }

    if (cached[key] !== undefined) {
        return cached[key];
    }

    // 匹配到后，判断下一位是否是 *，如果不是，就都前进一位，如果是的话，则需要考虑0次或者多次使用的情况
    if (p[pIndex] === s[sIndex] || p[pIndex] === '.') {
        if (pIndex + 1 < p.length && p[pIndex + 1] === '*') {
            cached[key] = helper(s, p, sIndex + 1, pIndex, cached) || helper(s, p, sIndex, pIndex + 2, cached);
        } else {
            cached[key] = helper(s, p, sIndex + 1, pIndex + 1, cached);
        }
    } else {
        // 未匹配到，如果下一位是 *,则考虑接着匹配，否则结束
        if (pIndex + 1 < p.length && p[pIndex + 1] === '*') {
            cached[key] = helper(s, p, sIndex, pIndex + 2, cached);
        } else {
            cached[key] = false;
        }
    }

    return cached[key];
}

//  s + 1, p 
// s + 1, p + 2
// s, p + 2

// s = "aa"
// p = "a"

// s = "aab"
// p = "c*a*b"
// s = 'ab';
// p = '.*'
// s = 'ab'
// p = '.*c'
// console.log(isMatch(s, p));