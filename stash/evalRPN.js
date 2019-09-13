/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	let i = 0;
	const operators = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => ~~(a / b),
	}

	while (tokens.length > 1) {
		if (operators[tokens[i]]) {
			tokens.splice(i - 2, 3, operators[tokens[i]](+tokens[i - 2], +tokens[i - 1]));
			i = i -1;
		} else {
			i++;
		}
	}

	return tokens[0];
};

// const str = ["4", "13", "5", "/", "+"];
// console.log(evalRPN(str))
// const str = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
// console.log(evalRPN(str))
// const str = ["4","3","-"]
// console.log(evalRPN(str))
