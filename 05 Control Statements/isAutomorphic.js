function isAutomorphic(n) {
  let givenNumber = n;
  let squareOfNumber = n * n;
  while (givenNumber >= 1) {
    let lastDigitOfNum = givenNumber % 10;
    let lastDigitOfSquare = squareOfNumber % 10;
    if (lastDigitOfNum != lastDigitOfSquare) {
      return "No";
    } else {
      givenNumber = Math.floor(givenNumber / 10);
      squareOfNumber = Math.floor(squareOfNumber / 10);
    }
  }
  return "Yes";
}

console.log(isAutomorphic(50));
