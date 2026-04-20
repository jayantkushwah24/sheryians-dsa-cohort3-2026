let array = [0, 1, 2, 3, 4, 5];
let k = 2;

function rotateArrayToLeftByOne(array) {
  let firstElement = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array[array.length - 1] = firstElement;
  return array;
}

if (k > array.length) {
  k = k % array.length;
}
for (let j = 0; j < k; j++) {
  rotateArrayToLeftByOne(array);
}
console.log(array);
