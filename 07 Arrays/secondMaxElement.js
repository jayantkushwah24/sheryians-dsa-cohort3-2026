let arr = [-5, -10, -15, -20];
let maxNum = -Infinity;
let secondMaxNum = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    secondMaxNum = maxNum;
    maxNum = arr[i];
  } else if (arr[i] > secondMaxNum && arr[i] !== maxNum) {
    secondMaxNum = arr[i];
  }
}

console.log(secondMaxNum);
