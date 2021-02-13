/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    if (s[0] === '+' || s[0] === '-') {
        s = s.slice(1);
    }

    if (s.length === 0) return false;

    if (s[0] === 'e' || s[0] === 'E') return false;

    let hasZero = false;
    while (s[0] === 0) {
        s = s.slice(1);
        hasZero = true;
    }

    // if (s[0] === '.') return hasZero;

    let index = 0;

    let isComma = false;
    let isE = false;
    let hasNumber = false;

    for (; index < s.length; index++) {
        let i = index;
        if (s[i] >= '0' && s[i] <= '9') {
            hasNumber = true;
            continue;
        }

        if (s[i] === '.') {
            isComma = true;
            break;
        }

        if (s[i] === 'E' || s[i] === 'e') {
            isE = true;
            break;
        }

        return false;
    }

    if (index === s.length) return true;

    if (isComma) {
        index++;
        if (index === s.length) return hasNumber;
        for (let i = index; i < s.length; i++) {
            if (s[i] >= '0' && s[i] <= '9') {
                continue;
            }

            return false;
        }
        return true;
    }

    if (isE) {
        index++;
        if (index === s.length) return false;

        const isMinus = s[index] === '-';

        if (isMinus) {
            index++;
            if (index === s.length) return false;
        }


        for (let i = index; i < s.length; i++) {
            if (s[i] >= '0' && s[i] <= '9') {
                continue;
            }

            return false;
        }
        return true;
    }

    return false;


};

// console.log(isNumber('3.1416'));
// console.log(isNumber('+100'));
// console.log(isNumber('-123'));
// console.log(isNumber('5e2'));
// console.log(isNumber('-1E-16'));
// console.log(isNumber('0123'));
// console.log(isNumber('.1'));
// console.log(isNumber('.'));
// console.log(isNumber('3.'));
console.log(isNumber('46.e3'));
