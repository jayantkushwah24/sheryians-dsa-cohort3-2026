function longestSubarray(arr, k) {
  let indexMap = new Map();
  let longest = 0;
  let sum = 0;
  indexMap.set(0, -1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (indexMap.has(sum - k)) {
      longest = Math.max(longest, i - indexMap.get(sum - k));
    }
    if (!indexMap.has(sum)) {
      indexMap.set(sum, i);
    }
  }
  return longest;
}
let arr = [10, 5, 2, 7, 1, -10];
let k = 15;
console.log(longestSubarray(arr, k));
