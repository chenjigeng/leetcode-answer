/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/
 * 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // let startObserving = false;
  let profit = 0, startIndex = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      // startObserving = true;
      startIndex = i - 1;
      for (let j = i; j < prices.length; j++) {
        if (prices[j] > prices[j + 1]) {
          // startObserving = false;
          profit += prices[j] - prices[startIndex];
          i = j;
          break; 
        } else if (j === prices.length - 1) {
          profit += prices[j] - prices[startIndex];
          return profit;
        }
      }
    }
  }
  return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));