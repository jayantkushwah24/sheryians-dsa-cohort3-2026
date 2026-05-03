/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
  //Write your code here
  if (n == 0) return;
  process.stdout.write(n + " ");
  printNumbers(n - 1);
}

module.exports = { printNumbers };
