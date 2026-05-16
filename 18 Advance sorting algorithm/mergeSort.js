function merge(arr, f, l, mid) {
  let sorted = new Array(l - f + 1);
  let i = f,
    j = mid + 1,
    k = 0;
  while (i <= mid && j <= l) {
    if (arr[i] < arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  while (i <= mid) sorted[k++] = arr[i++];
  while (j <= l) sorted[k++] = arr[j++];
  i = f;
  k = 0;
  while (i <= l) arr[i++] = sorted[k++];
}

function divide(arr, f, l) {
  if (f >= l) return;
  let mid = Math.floor((f + l) / 2);
  divide(arr, f, mid);
  divide(arr, mid + 1, l);
  merge(arr, f, l, mid);
}
let arr = [
  4, 335, 43423, 12, 34, 6, 74, 212, 1, 546, 66, 221, 13, -1, -56, -312,
];
divide(arr, 0, arr.length - 1);
console.log(arr);
