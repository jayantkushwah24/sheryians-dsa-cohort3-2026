class Solution {
  cyclicSort(arr) {
    let i = 0;

    while (i < arr.length) {
      let correctIdx = arr[i] - 1;
      if (arr[i] != i + 1) {
        let temp = arr[i];
        arr[i] = arr[correctIdx];
        arr[correctIdx] = temp;
      } else {
        i++;
      }
    }
    return arr;
  }
}

