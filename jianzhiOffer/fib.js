function Fibonacci(n)
{
	const arr = [0, 1, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i-1] + arr[i - 2];
	}

	return arr[n];
    // write code here
}