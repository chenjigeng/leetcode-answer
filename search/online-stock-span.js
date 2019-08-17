// 单调栈
// 目的，是找到在我之前刚好比我大的那个位置。

var StockSpanner = function() {
  this.prices = [];
  this.weights = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let weight = 1;

  while (this.prices.length > 0 && this.prices[this.prices.length - 1] <= price) {
    this.prices.pop();
    weight += this.weights.pop();
  }

  this.prices.push(price);
  this.weights.push(weight);

  return weight;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */