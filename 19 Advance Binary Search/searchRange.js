/**
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - The target to find
 * @return {number[]} - First and last positions of the target
 */
function searchRange(nums, target) {
  let x = -1,
    y = -1;
  let f = 0,
    l = nums.length - 1;
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (nums[mid] == target) {
      x = mid;
      l = mid - 1;
    } else if (nums[mid] > target) {
      l = mid - 1;
    } else {
      f = mid + 1;
    }
  }
  ((f = 0), (l = nums.length - 1));
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (nums[mid] == target) {
      y = mid;
      f = mid + 1;
    } else if (nums[mid] > target) {
      l = mid - 1;
    } else {
      f = mid + 1;
    }
  }
  return [x, y];
}
