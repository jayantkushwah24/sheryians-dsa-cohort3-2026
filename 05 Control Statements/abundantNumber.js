class Solution {
  is_abundant(nStr) {
    let sumOfDivisor = 0;
    let givenNumber = nStr;

    for (let i = 1; i < givenNumber; i++) {
      if (givenNumber % i == 0) {
        sumOfDivisor += i;
      }
    }
    if (sumOfDivisor > nStr) {
      return "Yes";
    } else {
      return "No";
    }
  }
}
