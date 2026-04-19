let maxNum = -Infinity;
console.log(maxNum);

let index = 0;
let arr = [-10, -20, -30, -40];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
    index = i;
  }
}
// console.log(maxNum);
// console.log(index);
