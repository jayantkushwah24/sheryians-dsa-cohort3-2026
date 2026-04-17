function isPrime(n) {
  if (n == 0 || n == 1) return "Not Prime";
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

console.log(isPrime(4));
