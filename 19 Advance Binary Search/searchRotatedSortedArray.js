/**
 * @param {number[]} arr - Rotated sorted array
 * @param {number} target - Value to search
 * @return {number} - Index of the target, or -1 if not found
 */
function search(nums, target) {
  let f = 0,
    l = nums.length - 1;
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[f] <= nums[mid]) {
      if (target >= nums[f] && target <= nums[mid]) {
        l = mid - 1;
      } else {
        f = mid + 1;
      }
    } else if (nums[mid] <= nums[l]) {
      if (target >= nums[mid] && target <= nums[l]) {
        f = mid + 1;
      } else {
        l = mid - 1;
      }
    }
  }
  return -1;
}
