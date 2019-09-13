const line =  readline().split(' ');
const V = +line[0], n = +line[1];
var ans = 0;
const W = [], D = [];
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
		W.push(+lines[0]);
		D.push(+lines[1]);
}

dp(n, V, W, D);
/**
 *
 *
 * @param {number} n
 * @param {number} w
 * @param {Array} W
 * @param {Array} D
 */
function dp(n, w, W, D) {
	const f = [];

	for (let i = 0; i <= w; i++) {
		f[i] = 0;
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j > w; j--) {
			if (f[j - W[i]] + D[i] > f[j]) {
				f[j] = f[j - W[i]] + D[i];
			}
		}
	}

	print(f[w]);
	// return f[w];
}

// W = [1, 2, 3, 2];
// D = [4, 6, 12, 7];
// dp(4, 6, W, D);