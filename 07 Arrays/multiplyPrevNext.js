class Solution {
  multiplyPrevNext(arr) {
    let array = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      if (i == 0) {
        array[i] = arr[i] * arr[i + 1];
      } else if (i == arr.length - 1) {
        array[i] = arr[i] * arr[i - 1];
      } else {
        array[i] = arr[i - 1] * arr[i + 1];
      }
    }
    return array;
  }
}
