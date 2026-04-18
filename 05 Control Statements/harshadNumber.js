class Solution {
  is_harshad(nStr) {
    let sumOfNumber = 0;
    let number = nStr;
    while (number >= 1) {
      let lastDigit = number % 10;
      sumOfNumber += lastDigit;
      number = Math.floor(number / 10);
    }
    if (nStr % sumOfNumber == 0) {
      return "Harshad Number";
    } else {
      return "Not Harshad Number";
    }
  }
}
