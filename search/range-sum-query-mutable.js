// 线段树
// 对于一个n的序列，我们可以将其构造为2*n的线段树。
// s(n) = operator(s(2 * n) , s(2 * n + 1))
// 更新i，则 s(i + len) = val; s((i + len) / 2) = s(i + len) + s(i + len (+-) 1);
// 聚合，则left = start + len, right = end + len; while(left <= right) if (left === odd) { operator(left); left++; } if (right === event) { operator(right); right--;}
// sqrt 分段


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  const segments = [];
  this.length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    segments[i + nums.length] = nums[i];
  }

  for (let i = nums.length - 1; i > 0; i--) {
    segments[i] = segments[i * 2] + segments[i * 2 + 1];
  }

  this.segments = segments;
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  i += this.length;
  this.segments[i] = val;
  while (i > 0) {
    if (i % 2 === 0) {
      this.segments[i / 2] = this.segments[i] + this.segments[i + 1];
    } else {
      this.segments[Math.floor(i / 2)] = this.segments[i] + this.segments[i - 1];
    }
    i = Math.floor(i / 2);
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  let left = i + this.length;
  let right = j + this.length;
  let sum = 0;
  
  while (left <= right) {
    if (left % 2 !== 0) {
      sum += this.segments[left];
      left++;
    }

    if (right % 2 === 0) {
      sum += this.segments[right];
      right--;
    }

    if (left === right) {
      sum += this.segments[left];
    }
    left /= 2;
    right = (right - 1) / 2;
  }

  return sum;
};

// 9 4 5 1 3 5 0 
// const obj = new NumArray([1, 3, 5]);

// console.log(obj.sumRange(0, 2));
// obj.update(1, 2);
// console.log(obj.sumRange(0, 2));

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */