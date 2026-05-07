function squareRoot(n) {
  let first = 1;
  let last = n;
  let ans = 0;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (mid <= Math.floor(n / mid)) {
      ans = mid;
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return ans;
}

console.log(squareRoot(20));

function squareRoot2(n) {
  if (n <= 1) return n;
  let ans = 1;
  for (let i = 2; i * i <= n; i++) {
    if (i * i <= n) {
      ans = i;
    }
  }
  return ans;
}
