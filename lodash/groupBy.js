function groupBy(arr, groupKey) {
    return arr.reduce(function (prev, cur) {
        var get;
        if (typeof groupKey === 'string') {
            get = function (value) { return value[groupKey]; };
        }
        else {
            get = groupKey;
        }
        var key = get(cur);
        if (prev[key]) {
            prev[key].push(cur);
        }
        else {
            prev[key] = [cur];
        }
        return prev;
    }, {});
}
var nums = [6.1, 4.2, 6.3];
var words = ['one', 'two', 'three'];
console.log(groupBy(nums, Math.floor));
console.log(groupBy(words, 'length'));
