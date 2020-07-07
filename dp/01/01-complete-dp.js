var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let T, M;
let TT = [], VV = [];
rl.on('line', function(line) {
	var tokens = line.split(' ')
	if (!T) {
		T = parseInt(tokens[0]);
		M = parseInt(tokens[1]);
	} else {
		TT.push(parseInt(tokens[0]));
		VV.push(parseInt(tokens[1]));
	}

	let f = [];

	for (let i = 0; i <= T; i++) {
		f[i] = 0;
	}

	for (let i = 0; i < M; i++) {
		for (let j = TT[i]; j <= T; j++) {
			if (f[j - TT[i]] + VV[i] > f[j]) {
				f[j] = f[j - TT[i]] + VV[i];
			}
		}
	}

	console.log(f[T]);
})