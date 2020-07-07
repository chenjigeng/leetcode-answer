const operator = ['-', '+', '*', '/', '(', ')', ' '];
const priorities = {
	'+': 1,
	'-': 1,
	'*': 2,
	'/': 2,
	'(': 3,
	')': 4,
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
	const operatorStack = [];
	const tokens = [];
	for (let i = 0; i < s.length;) {
		const token = getNextToken(s, i);
		i += token.length;
		
		if (operator.includes(token)) {
			if (token === ' ') continue;
			const priority = priorities[token];

			if (priority === 4) {
				while (operatorStack[operatorStack.length - 1] !== '(') {
					tokens.push(operatorStack.pop());
				}
				operatorStack.pop();
			} else {
				while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(' && priorities[operatorStack[operatorStack.length - 1]] >= priority) {
					tokens.push(operatorStack.pop());
				}
				operatorStack.push(token);
			}
		} else {
			tokens.push(token);
		}
	}
	
	while (operatorStack.length > 0) {
		tokens.push(operatorStack.pop());
	}

	// console.log(tokens)

	return evalRPN(tokens);
};

function getNextToken(s, i) {
	if (operator.includes(s[i])) {
		return s[i];
	}
	
	for (let j = i; j < s.length; j++) {
		if (operator.includes(s[j])) {
			return s.slice(i, j);
		}
	}

	return s.slice(i);
}


var evalRPN = function(tokens) {
	let num = [];
	let lNum = 0,rNum = 0;
	let calc = {
			'+': (b,a) => a + b,
			'-': (b,a) => a - b,
			'*': (b,a) => a * b,
			'/': (b,a) => ~~(a / b)
	}
	while(tokens.length)  {
			let val = tokens.shift();
			if(calc[val]) {
					val = calc[val](num.pop(),num.pop());
					num.push(+val);
			}else{
					num.push(+val);
			}
	}  
	return num[0];
};
