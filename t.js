/**
 *
 *
 * @param {Object} obj
 */
function con(obj) {
	console.log(obj);
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			Object.defineProperties
		}
	}
	Object.defineProperties(obj, {
		writeable: false,
	});

	return obj;
}

var obj = {
	name: 'cjg',
}

const a = con(obj);

console.log(a);