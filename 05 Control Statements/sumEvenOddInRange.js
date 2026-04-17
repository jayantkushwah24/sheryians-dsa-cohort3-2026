function sumEvenOddInRange(start, end) {
  if (end < start) {
    let temp = start;
    start = end;
    end = temp;
  }
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }
  return [sumEven, sumOdd];
}
