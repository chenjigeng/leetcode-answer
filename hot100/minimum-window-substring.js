/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    const tMap = {}, sMap = {};

    for (let i = 0; i < t.length; i++) {
        if (!tMap[t[i]]) {
            tMap[t[i]] = 1;
        } else {
            tMap[t[i]]++;
        }
    }

    let left = 0, right = -1, result = '';

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = sMap[s[i]] ? sMap[s[i]] + 1 : 1;
        right = i;
        if (include(sMap, tMap)) {
            let newLeft = left + 1;
            for (let j = newLeft; j <= right+1; j++) {
                sMap[s[j - 1]]--;
                if (!include(sMap, tMap)) {
                    newLeft = j;
                    break;
                }
            }
            const target = s.slice(newLeft - 1, right + 1);
            left = newLeft;
            if (!result)  {
                result = target;
            } else {
                result = result.length > target.length ? target : result;
            }
            
        }
    }

    // console.log(result);

    return result
};

function include(sMap, tMap) {
    for (let i in tMap) {
        if (!sMap[i] || sMap[i] < tMap[i]) {
            return false;
        }
    }

    return true;
}


// S = "ask_not_what_your_country_can_do_for_you_ask_what_you_can_do_for_your_country"
// T = "ask_country"

// S = 'ab'
// T = 'a'
// S = 'ab'
// T = 'b'
// console.log(minWindow(S, T));