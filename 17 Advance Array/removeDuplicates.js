/**
 * Remove duplicates in-place from a sorted array.
 * @param {number[]} arr
 * @return {number} - Count of unique elements
 */
function removeDuplicates(arr) {
  let count = 1;
  let j = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      arr[j++] = arr[i];
      count++;
    }
  }
  return count;
}
