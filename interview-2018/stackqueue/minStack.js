/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
    this.stack.push(x);
    this.min.push(x);
  } else {
    const currentMin = this.min[this.min.length - 1];
    this.stack.push(x);
    if (currentMin > x) {
      this.min.push(x);
    } else {
      this.min.push(currentMin);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.min.pop();
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */