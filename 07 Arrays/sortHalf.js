function sortHalf(arr) {
  let n = Math.floor(arr.length / 2);
  for (let i = 0; i <= n - 2; i++) {
    for (let j = i; j <= n - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  for (let i = n; i <= arr.length - 2; i++) {
    for (let j = n; j <= arr.length - 2; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
