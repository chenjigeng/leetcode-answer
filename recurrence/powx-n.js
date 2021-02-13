/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    const cached = {
        1: x
    }

    const sign = n < 0;

    n = Math.abs(n);

    powCache(x, n, cached);

    if (sign) {
        return 1 / cached[n];
    }

    return cached[n];
};

/**
 * 
 * @param {number} x 
 * @param {number} n 
 * @param {{[key: string]: number}} cached 
 */
function powCache(x, n, cached) {
    if (cached[n]) return cached[n];

    const leave = n % 2;

    if (leave === 0) {
        powCache(x, n / 2, cached);
        cached[n] = cached[n / 2] * cached[n / 2]
    } else {
        powCache(x, (n - 1) / 2, cached);
        cached[n] = cached[(n - 1) / 2] * cached[(n - 1) / 2] * x;
    }
}



// console.log(myPow(2, 10));
// console.log(myPow(2, -2));