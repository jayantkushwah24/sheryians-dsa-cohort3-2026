/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numsSet = new Set(nums);
  let longest = 0;
  let count = 1;
  for (let num of numsSet) {
    if (numsSet.has(num - 1) == false) {
      while (numsSet.has(num + count)) {
        count++;
      }
      longest = Math.max(longest, count);
      count = 1;
    }
  }
  return longest;
};
