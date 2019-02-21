/**
 *
 *
 * @param {Array} rotateArray
 */
function minNumberInRotateArray(rotateArray)
{
	let left = 0, right = rotateArray.length - 1;
	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (rotateArray[mid] <= rotateArray[right]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}

	return rotateArray[left];
    // write code here
}

// console.log(minNumberInRotateArray([3, 4, 5, 1, 2]));