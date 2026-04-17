function sumOfDigits(n) {
  // Write your logic here
  let answer = 0;
  let givenNumber = n;
  while (givenNumber >= 1) {
    let lastDigit = givenNumber % 10;
    answer += lastDigit;
    givenNumber = Math.floor(givenNumber / 10);
  }
  return answer;
}
