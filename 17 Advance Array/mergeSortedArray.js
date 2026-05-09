// JavaScript code here
function mergeArrays(arr1, m, arr2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      k--;
      i--;
    } else {
      arr1[k] = arr2[j];
      k--;
      j--;
    }
  }
  while (i >= 0) {
    arr1[k] = arr1[i];
    k--;
    i--;
  }
  while (j >= 0) {
    arr1[k] = arr2[j];
    k--;
    j--;
  }
}
