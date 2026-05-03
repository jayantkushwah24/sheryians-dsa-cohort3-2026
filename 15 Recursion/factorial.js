/**
 * Recursive function to calculate factorial of a number
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // Write your code here
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = { factorial };
