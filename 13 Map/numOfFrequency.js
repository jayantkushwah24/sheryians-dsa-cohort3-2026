function numOfFreq(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
}
let arr = [11, 33, 1, 2, 11, 4, 55, 6, 8, 1, 2, 3, 5, 11, 55, 33];
console.log(numOfFreq(arr));
