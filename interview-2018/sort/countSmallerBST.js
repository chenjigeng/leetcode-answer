/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  if (nums.length === 0) return [];
  let count = 0;
  class BSF {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.count = 0
    }
    insert(node) {
      // console.log(node)
      if (node.val <= this.val) {
        this.count++;
        if (!this.left) {
          this.left = node;
        } else {
          this.left.insert(node);
        }
      } else {
        count += this.count + 1;
        if (!this.right) {
          this.right = node;
        } else {
          this.right.insert(node);
        }
      }
    }
  }
  const res = [0];
  const node = new BSF(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    count = 0;
    node.insert(new BSF(nums[i]));
    res.push(count);
  }

  // console.log(res)
  return res.reverse();
};

countSmaller([2, 1, 0])

countSmaller([5,2,6,1])