/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] > x) {
    this.minStack.push(x);
  } else {
    this.minStack.push(this.minStack[this.minStack.length - 1]);
  }
  this.stack.push(x - this.minStack[this.minStack.length - 1]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop();
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.minStack[this.minStack.length - 1] + this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());   // 返回 -3.
// minStack.pop();
// console.log(minStack.top());      // 返回 0.
// console.log(minStack.getMin());   // 返回 -2.