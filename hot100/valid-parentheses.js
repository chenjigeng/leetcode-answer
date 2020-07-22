const isLeft = {
    '{':  true,
    '[': true,
    '(': true,
}

const isRight = {
    '}':  true,
    ']': true,
    ')': true,
}

const map = {
    '{': '}',
    '[': ']',
    '(': ')',
    '}': '{',
    ']': '[',
    ')': '('
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            if (isRight[s[i]]) {
                return false;
            }

            stack.push(s[i]);
        } else {
            if (stack[stack.length - 1] !== map[s[i]]) {
                if (isRight(s[i])) {
                    return false;
                }

                stack.push(s[i]);
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};