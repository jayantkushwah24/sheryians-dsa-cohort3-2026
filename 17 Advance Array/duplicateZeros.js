/**
 * Duplicate each occurrence of zero in the array in-place.
 * @param {number[]} arr - The input array
 * @return {void}
 */
function duplicateZeros(arr) {
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      for (let j = arr.length - 1; j >= i + 1; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
}
