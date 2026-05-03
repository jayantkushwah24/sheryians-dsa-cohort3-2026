/**
 * Print "Hello" exactly n times using recursion.
 * @param {number} n - Number of times to print
 */
function printHello(n) {
  // Your code here
  if (n == 0) return;
  console.log("Hello");
  printHello(n - 1);
}

module.exports = { printHello };
