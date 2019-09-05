/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.originArr = nums.slice();
  this.arr = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.arr = this.originArr.slice();
  return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const arr = this.arr;
  for (let i = arr.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    [arr[randomIndex], arr[i - 1]] = [arr[i - 1], arr[randomIndex]];
  }

  return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */