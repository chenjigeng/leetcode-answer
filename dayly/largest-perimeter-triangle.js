/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a, b) => a - b);
    let num = 0;

    for (let first = A.length - 1; first >= 2; first--) {
        if (A[first] < A[first - 1] + A[first - 2]) {
            return A[first] + A[first - 1] + A[first - 2]
        }
    }

    return num;
};

function isTan(x, y, z) {
    if (x + y > z) {
        return true;
    }

    return false;
}