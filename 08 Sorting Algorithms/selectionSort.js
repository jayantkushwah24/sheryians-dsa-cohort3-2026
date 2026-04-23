function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[min] != arr[i]) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
