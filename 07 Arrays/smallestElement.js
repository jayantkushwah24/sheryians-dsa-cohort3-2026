let minNum = 0;
let arr = [23, 53, -23, 56, -67];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minNum) {
    minNum = arr[i];
  }
}
console.log(minNum);
