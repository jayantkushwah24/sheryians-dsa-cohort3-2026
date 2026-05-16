// if arr is sorted then o(n*n) otherwise O(n*log(n))
// quick is more space efficient than merge sort

function quickSort(arr, f, l) {
  if (f >= l) return;
  let i = findPartition(arr, f, l);
  quickSort(arr, f, i - 1);
  quickSort(arr, i + 1, l);
}
function findPartition(arr, f, l) {
  let p = arr[l];
  let k = 0;
  for (let i = 0; i < l; i++) {
    if (arr[i] < p) {
      swap(i, k);
      k++;
    }
  }
  swap(k, l);
  return k;
}
function swap(a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
let arr = [1, 2, 4523, 12, 4, 123, 75, 121];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
