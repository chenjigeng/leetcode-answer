const inStack = [];
const outStack = [];

function push(node)
{
	inStack.push(node);
    // write code here
}
function pop()
{
	if (outStack.length === 0) {
		if (inStack.length > 0) {
			while (inStack.length) {
				outStack.push(inStack.pop());
			}
		}
	}

	return outStack.pop();
    // write code here
}