/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const arrLen = p.length;


    const map = {

    }

    const windows = {};

    for (let i = 0; i < p.length; i++) {
        if (!map[p[i]]) {
            map[p[i]] = 0
        }

        if (!windows[s[i]]) {
            windows[s[i]] = 0
        }

        windows[s[i]]++;
        map[p[i]]++;
    }

    const arr = [];



    for (let i = 0; i <= s.length - p.length; i++) {
        if (isSame(map, windows)) {
            arr.push(i);
        }

        windows[s[i]]--;
        if (!windows[s[i + p.length]]) {
            windows[s[i + p.length]] = 0
        }
        windows[s[i + p.length]]++;
    }

    // console.log(arr);

    return arr;
};

/**
 * 
 * @param {{[key: string]: number}} map1 
 * @param {{[key: string]: number}} map2 
 */
function isSame(map1, map2) {
    for (let key in map1) {
        if (map1[key] !== map2[key])
            return false;
    }

    return true;
}


// findAnagrams('cbaebabacd', 'abc')


// findAnagrams('abab', 'ab')