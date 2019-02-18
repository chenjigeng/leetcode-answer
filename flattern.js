let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// function flattern(arr) {
		
// }
// function flatten(arr){
// 	while(arr.some(item=>Array.isArray(item))) {
// 			arr = [].concat(...arr);
// 			console.log(arr);
// 	}
// 	return arr;
// }

/**
 *
 *
 * @param {Array} arr
 * @returns
 */
function flatten(arr) {
	let newArr = [...arr];
	while (newArr.some(item => Array.isArray(item))) {
		newArr = [].concat(...newArr);
	}

	const set = new Set(newArr);

	const res = Array.from(set).sort((a, b) => a - b);

	console.log(res);

	return res;
}
console.log(flatten(givenArr));