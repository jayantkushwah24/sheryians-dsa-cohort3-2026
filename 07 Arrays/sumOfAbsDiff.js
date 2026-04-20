function sumOfAbsDiff(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      let absDiff = Math.abs(arr[i] - arr[j]);
      sum += absDiff;
    }
  }
  return sum;
}
// console.log(sumOfAbsDiff([1, 2, 3, 4, 5]));
console.log(sumOfAbsDiff([-1, 3, -2, 5]));
