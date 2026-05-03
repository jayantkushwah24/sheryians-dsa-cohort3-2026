function sumOfDigits(n) {
  // Write your logic here
  if (n < 1) return 0;
  let lastDigit = n % 10;
  return lastDigit + sumOfDigits(Math.floor(n / 10));
}
