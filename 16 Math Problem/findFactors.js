/**
 * Print all factors of the number in ascending order
 * @param {number} n
 */
function findFactors(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      process.stdout.write(i + " ");
    }
  }
}

