/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
	this.lh = new Heap((a, b) => b - a);
	this.hh = new Heap((a, b) => a - b);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	this.lh.add(num);
	this.hh.add(this.lh.top());
	this.lh.pop();
	if (this.hh.size() > this.lh.size()) {
		this.lh.add(this.hh.top());
		this.hh.pop();
	}
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
	if (this.lh.size() > this.hh.size()) return this.lh.top();
	return (this.lh.top() + this.hh.top()) / 2;
};

class Heap {
	constructor(compare) {
		this.compare = compare;
		this.arr = [0];
	}

	add(num) {
		let index = this.arr.length;
		let parentIndex = Math.floor(index / 2);
		while (parentIndex > 0) {
			if (this.compare(num, this.arr[parentIndex]) > 0) {
				this.arr[index] = this.arr[parentIndex];
				index = parentIndex;
				parentIndex = Math.floor(parentIndex / 2);
			} else {
				break;
			}
		}
		
		this.arr[index] = num;
	}

	size() {
		return this.arr.length - 1;
	}

	top() {
		return this.arr[1];
	}

	pop() {
		if (this.arr.length <= 2) {
			this.arr.length = 1;
			return;
		}
		this.arr[1] = this.arr[this.arr.length - 1];
		this.arr.length = this.arr.length - 1;

		let index = 1;
		let childIndex;
		let arrLength = this.arr.length;
		const num = this.arr[1];
		while (index < arrLength) {
			childIndex = index * 2;
			if (childIndex >= arrLength) {
				break;
			}
			if (childIndex + 1 < arrLength && this.compare(this.arr[childIndex + 1], this.arr[childIndex]) > 0) {
				childIndex++;
			}

			if (this.compare(num, this.arr[childIndex]) < 0) {
				this.arr[index] = this.arr[childIndex];
				index = childIndex;
			} else {
				break;
			}
		}

		this.arr[index] = num;
	}
}
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// obj = new MedianFinder();
// obj.addNum(10);
// obj.addNum(12)
// console.log(obj.findMedian());
// obj.addNum(13)
// obj.addNum(11)
// console.log(obj.findMedian());
