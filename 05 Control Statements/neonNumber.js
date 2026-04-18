class Solution {
  is_neon(nStr) {
    let givenNumber = nStr;
    let squaredNumber = nStr * nStr;
    let sumOfSquaredNumDigit = 0;
    while (squaredNumber >= 1) {
      let lastDigit = squaredNumber % 10;
      sumOfSquaredNumDigit += lastDigit;
      squaredNumber = Math.floor(squaredNumber / 10);
    }
    return sumOfSquaredNumDigit == nStr ? "Yes" : "No";
  }
}
