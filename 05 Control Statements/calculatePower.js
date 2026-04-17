function calculatePower(a, b) {
  if (b == 0) return 1;
  let answer = 1;
  for (let i = 1; i <= b; i++) {
    answer *= a;
  }
  return answer;
}
