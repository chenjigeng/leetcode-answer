/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
	nums.sort((a, b) => a - b);
	const mid = Math.ceil(nums.length / 2);
	const left = nums.slice(0, mid);
	const right = nums.slice(mid);
	const newNums = [];
	let leftIndex = 0, rightIndex = right.length - 1;
  console.log(left, right);
	while (leftIndex < left.length && rightIndex >= 0) {
    console.log(left[leftIndex])
    console.log(right[rightIndex])
		newNums.push(left[leftIndex]);
		newNums.push(right[rightIndex]);
    leftIndex++;
    rightIndex--;
	}

	console.log(newNums);

	return newNums;
};

wiggleSort([1,5,1,1,6,4])