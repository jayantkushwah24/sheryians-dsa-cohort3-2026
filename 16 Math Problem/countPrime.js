/**
 * Count prime numbers less than n.
 * @param {number} n
 * @return {number}
 */

// seive of eratosthenes
function countPrimes2(n) {
  let count = 0;
  let prime = new Array(n + 1).fill(true);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        prime[j] = false;
      }
    }
  }
  for (let k = 2; k < prime.length; k++) {
    if (prime[k]) count++;
  }
  return count;
}
console.log(countPrimes2(10));

function countPrimes(n) {
  // Write your code here
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i = i + 2) {
    if (n % i == 0) return false;
  }
  return true;
}
