/**
 * @param {number[]} arr - Mountain array
 * @return {number} - Index of the peak element
 */
function peakIndexInMountainArray(arr) {
  let f = 0,
    l = arr.length;
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (arr[mid] < arr[mid + 1]) {
      f = mid + 1;
    } else if (arr[mid - 1] > arr[mid]) {
      l = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
