/**
 * @param {number[]} nums - A sorted array of distinct integers
 * @param {number} target - The target value to find or insert
 * @return {number} - Index of target or correct insert position
 */
function searchInsert(nums, target) {
  let f = 0,
    l = nums.length - 1;
  while (f < l) {
    let mid = Math.floor((f + l) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      l = mid - 1;
    } else {
      f = mid + 1;
    }
  }
  if (target > nums[l]) return l + 1;
  else return l;
}
