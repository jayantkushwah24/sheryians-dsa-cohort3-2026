/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums[i] = -1;
    }
  }
  let k = 0;
  let sum = 0;
  let longest = 0;
  let indexMap = new Map();
  indexMap.set(0, -1);
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (indexMap.has(sum - k)) {
      longest = Math.max(longest, i - indexMap.get(sum - k));
    }
    if (indexMap.has(sum) == false) {
      indexMap.set(sum, i);
    }
  }
  return longest;
};
