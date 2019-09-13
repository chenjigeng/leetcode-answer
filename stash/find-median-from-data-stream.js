/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
	this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	const index = binarySearch(this.arr, num);
	for (let i = this.arr.length; i > index; i--) {
		this.arr[i] = this.arr[i - 1];
	}
	this.arr[index] = num;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
	console.log(this.arr)
	const mid = Math.floor(this.arr.length / 2);
	if (this.arr.length % 2 === 0) {
		return (this.arr[mid] + this.arr[mid - 1]) / 2;
	}

	return this.arr[mid];
};

/**
 *
 *
 * @param {Array} arr
 * @param {number} num
 */
function binarySearch(arr, num) {
	let start = 0, end = arr.length;
	while (start < end) {
		const mid = Math.floor((start + end) / 2);
		if (arr[mid] > num) {
			end = mid - 1;
		} else if (arr[mid] < num) {
			start = mid + 1;
		} else {
			return mid;
		}
	}

	if (arr[start] < num) {
		return start + 1;
	}

	return start;
}

// console.log(binarySearch([], 2));
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// const obj = new MedianFinder();
// obj.addNum(10);
// obj.addNum(12)
// // console.log(obj.findMedian());
// obj.addNum(13)
// obj.addNum(11)

// console.log(obj.findMedian());
