/**
 *
 *
 * @param {Array} arr
 */
function shuttle(arr) {
	for (let i = arr.length; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * i);
		const selectedItem = arr[randomIndex];
		[arr[randomIndex], arr[i - 1]] = [arr[i - 1], arr[randomIndex]];
	}

	console.log(arr);
	return arr;
}

const arr = [1, 6, 4, 2, 7, 3, 0, 5, 8, 9];

shuttle(arr);