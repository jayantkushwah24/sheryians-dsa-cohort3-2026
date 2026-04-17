function isStrongNumber(n) {
  let givenNum = n;
  let sumOfFactorial = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit == 0 || digit == 1) {
      sumOfFactorial += 1;
    } else {
      let sum = 1;
      for (let i = digit; i >= 1; i--) {
        sum *= i;
      }
      sumOfFactorial += sum;
    }
    n = Math.floor(n / 10);
  }

  if (sumOfFactorial == givenNum) {
    return "Yes";
  }
  return "No";
}
