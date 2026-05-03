function reverseDigits(n) {
  // handle negative numbers
  if (n < 0) return -reverseDigits(-n);

  return helper(n, 0);
}

function helper(n, rev) {
  if (n === 0) return rev;

  const lastDigit = n % 10;

  return helper(Math.floor(n / 10), rev * 10 + lastDigit);
}

module.exports = { reverseDigits };
