class Solution {
  is_armstrong(nStr) {
    let givenNumber = nStr;
    let numberOfDigit = givenNumber.toString().length;
    let sumOfDigitProduct = 0;
    while (givenNumber >= 1) {
      let lastDigit = givenNumber % 10;
      let product = 1;
      for (let i = 1; i <= numberOfDigit; i++) {
        product = product * lastDigit;
      }
      sumOfDigitProduct += product;
      givenNumber = Math.floor(givenNumber / 10);
    }
    return sumOfDigitProduct == nStr ? "Armstrong" : "Not Armstrong";
  }
}
