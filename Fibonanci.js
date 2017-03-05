// Fibonacci
function fib(n) {
  if (n == 0)
    return 0;
  if (n <= 2)
    return 1;
  return fib(n-1) + fib(n-2);
}
console.log(fib(8)) // 0, 1, 2, 3, 5, 8, 13, 21