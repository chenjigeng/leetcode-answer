/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
	this.arr = [];
  this.map = {};

};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
	if (this.map[val]) return false;
  this.map[val] = true;
  this.arr.push(val);
	return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
	if (!this.map[val]) return false;
  this.arr.splice(this.arr.findIndex(item => item === val), 1);
  this.map[val] = false;
  return true;
};


/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
	let randomIndex = Math.floor(Math.random() * this.arr.length);

	return this.arr[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */