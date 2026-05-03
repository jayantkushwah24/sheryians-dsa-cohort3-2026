/**
 * Recursively prints natural numbers from 1 to n, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
  //Write your code here
  for (let i = 1; i <= n; i++) {
    process.stdout.write(`${i} `);
  }
}

module.exports = { printNumbers };
