/**
 * 输入：[7,1,5,3,6,4]
输出：5
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > min) {
            max = Math.max(prices[i] - min, max);
        }

        min = Math.min(min, prices[i]);
    }

    return max;
};
