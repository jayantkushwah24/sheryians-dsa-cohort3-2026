function moveZerosToEnd(arr) {
  // Write your logic here
  let array = new Array(arr.length);
  let a = 0;
  let b = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      array[a] = 1;
      a++;
    } else {
      array[b] = 0;
      b--;
    }
  }
  return array;
}

function moveZerosInPlace(arr) {
  // Write your logic here
  let a = 0;
  let b = arr.length - 1;
  while (a < b) {
    if (arr[b] == 0) {
      b--;
    } else if (arr[a] == 1) {
      a++;
    } else if (arr[a] == 0) {
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
      a++;
      b--;
    }
  }
  return arr;
}
