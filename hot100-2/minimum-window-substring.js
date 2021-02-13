/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = {};

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            map[t[i]] = 1;
        } else {
            map[t[i]]++;
        }
    }

    let left = 0,
        right = 0;
    let curMap = {};

    const check = () => {
        for (let key in map) {
            if (!curMap[key] || curMap[key] < map[key]) {
                return false;
            }
        }

        return true;
    };

    let result = "";

    while (right < s.length) {
        let c = s[right];

        if (curMap[c]) {
            curMap[c]++;
        } else {
            curMap[c] = 1;
        }

        while (check()) {
            let currentResult = s.slice(left, right + 1);

            if (!result || result.length > currentResult.length) {
                result = currentResult;
            }
            curMap[s[left]]--;
            left++;
        }

        right++;
    }

    // console.log(result);

    return result;
};

// (s = "ADOBECODEBANC"), (t = "ABC");
// (s = "s"), (t = "s");

// minWindow(s, t);
