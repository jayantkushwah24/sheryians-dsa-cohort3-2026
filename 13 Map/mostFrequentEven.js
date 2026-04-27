function mostFrequentEven(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }
  }

  let mostFreq = 0;
  for (let key of map.keys()) {
    if (map.get(key) > mostFreq) {
      mostFreq = map.get(key);
    }
  }
  if (mostFreq == 0) return -1;

  let ans = Number.MAX_VALUE;
  for (let key of map.keys()) {
    if (map.get(key) == mostFreq && key < ans) {
      ans = key;
    }
  }
  return ans;
}
let nums = [
  8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290,
];
console.log(mostFrequentEven(nums));
