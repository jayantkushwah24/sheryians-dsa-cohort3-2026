function copyAndReverseArray(arr) {
  let array = new Array(arr.length);
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    array[j] = arr[i];
    j++;
  }
  return array;
}

function reverseArrayInPlace(arr) {
  let a = 0;
  let b = arr.length - 1;
  while (b > a) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    a++;
    b--;
  }
  return arr;
}
