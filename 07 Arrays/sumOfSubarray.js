let array = [1, 2, 3, 7, 5];
let target = 12;
let count = 0;

for (let i = 0; i < array.length; i++) {
  let sum = 0;
  for (let j = i; j < array.length; j++) {
    sum += array[j];
    if (sum == target) count++;
  }
}
console.log(count);
