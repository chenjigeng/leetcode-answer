/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
	nums.sort((a, b) => {
		const aa = '' + a, bb = '' + b;

		return Number(bb + aa) - Number(aa + bb);
	});

	const result = nums.join('');

	if (+result === 0) return '0';

	return result;
};

// console.log(largestNumber([12, 121]));
// console.log(largestNumber([121,12]));
// console.log(largestNumber([3,30,34,5,9]));

// 