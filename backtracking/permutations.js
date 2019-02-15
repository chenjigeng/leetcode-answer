/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const res = [];
	permutation(res, nums, 0);
	return res;
};

/**
 * @param {number[]} nums
 */
function permutation(res, nums, index) {
	if (index === nums.length - 1) {
		res.push(nums.concat());
		return;
	}

	for (let i = index; i < nums.length; i++) {
		swap(nums, index, i);
		permutation(res, nums, index + 1);
		swap(nums, index, i);
	}
}

function swap(arr, i, j) {
	const item = arr[i];
	arr[i] = arr[j];
	arr[j] = item;
}

// console.log(permute([1, 2, 3]));