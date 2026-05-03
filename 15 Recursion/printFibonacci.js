/**
 * Print Fibonacci series up to n terms using recursion
 * @param {number} n
 * @returns {void}
 */

// function printFibonacci(n) {
//   let a = 0;
//   let b = 1;
//   let c;
//   console.log(a);
//   console.log(b);

//   for (let i = 0; i < n - 2; i++) {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//   }
// }

function printFibonacci(n) {
  // Write your logic here
  if (n < 1) {
    process.stdout.write("Invalid input");
    return;
  }

  for (let i = 0; i < n; i++) {
    process.stdout.write(fib(i) + " ");
  }
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

printFibonacci(7, 0, 1);
