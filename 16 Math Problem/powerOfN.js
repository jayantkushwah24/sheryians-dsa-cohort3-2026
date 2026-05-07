function powerOfN(n, p) {
  if (p == 1) return n;

  let p1, p2;
  if (p % 2 == 0) {
    p1 = p / 2;
    p2 = p / 2;
  } else {
    p1 = (p + 1) / 2;
    p2 = (p - 1) / 2;
  }

  return powerOfN(n, p1) * powerOfN(n, p2);
}
console.log(powerOfN(2, 31));

/**
 * Recursively calculates and prints n raised to the power p
 * Prints result up to 5 decimal places.
 * @param {number} n - base
 * @param {number} p - exponent
 */
function myPow(x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  console.log(power(x, n).toFixed(5));
}
function power(x, n) {
  if (n === 0) return 1;

  let half = power(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}
