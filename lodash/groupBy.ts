function groupBy(arr: Array<any>, groupKey: string | ((value) => any)) {
	return arr.reduce((prev, cur) => {
		let get;
		if (typeof groupKey === 'string') {
			get = (value) => value[groupKey];
		} else {
			get = groupKey;
		}
		const key = get(cur);
		if (prev[key]) {
			prev[key].push(cur);
		} else {
			prev[key] = [cur];
		}

		return prev;
	}, {});		
}

var nums = [6.1, 4.2, 6.3];
var words = ['one', 'two', 'three'];

console.log(groupBy(nums, Math.floor));
console.log(groupBy(words, 'length'));
