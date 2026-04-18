class Solution {
  prime_factors(nStr) {
    let givenNumber = nStr;
    const answer = [];
    if (givenNumber == 0 || givenNumber == 1) {
      return "No prime factors";
    }
    let i = 2;
    while (i <= givenNumber) {
      if (givenNumber % i == 0) {
        givenNumber /= i;
        let isPrime = true;
        for (let j = 2; j * j < i; j++) {
          if (i % j == 0) {
            isPrime = false;
          }
        }
        if (isPrime) {
          answer.push(i);
        }
      } else {
        i++;
      }
    }

    for (let k = 0; k < answer.length - 1; k++) {
      console.log(answer[k]);
    }
    return answer[answer.length - 1];
  }
}
