function prime_factors(nStr) {
  let givenNumber = nStr;
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
        console.log(i);
      }
    } else {
      i++;
    }
  }
}

prime_factors(60);
