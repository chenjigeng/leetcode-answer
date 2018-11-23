function tribonacci(signature,n){
  //your code here
  if (n === 0) return [];
  if (n < 3) {
    return signature.slice(0, n);
  }
  let arr = [...signature];
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr;
}


console.log(tribonacci([1,1,1],10));