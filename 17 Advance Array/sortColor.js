/**
 * Sort the colors in the array in-place.
 * @param {number[]} nums - The input array of colors
 * @return {number[]} - The sorted array
 */

//The Dutch National Flag (DNF) algorithm, proposed by Edsger Dijkstra, 
// is an efficient sorting algorithm used to sort an array containing three 
// distinct values (typically 0s, 1s, and 2s) in a single pass. It is often 
// called the 3-way partitioning algorithm because it segregates the array 
// into three sections—0s, 1s, and 2s—in-place, using constant extra space

function sortColors(nums) {
  // Write your code here
  let j = 0;
  let k = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (k + 1 == i) break;
    if (nums[i] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
    if (nums[i] == 2) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      k--;
      i--;
    }
  }
  return nums;
}

module.exports = { sortColors };
