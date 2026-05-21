/**
 * @param {number[]} arr
 * @param {number} k
 * @return s {number}
 */

class Solution {
  findPages(arr, k) {
    if (k > arr.length) return -1;

    let f = 0,
      l = 0;
    let ans = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > f) {
        f = arr[i];
      }
      l += arr[i];
    }

    if (k == arr.length) return f;

    while (f <= l) {
      let maxPages = Math.floor((f + l) / 2);
      let count = 1;
      let pageSum = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] + pageSum <= maxPages) {
          pageSum += arr[j];
        } else {
          count += 1;
          pageSum = 0;
          j--;
        }
      }

      if (count > k) {
        f = maxPages + 1;
      } else {
        ans = maxPages;
        l = maxPages - 1;
      }
    }

    return ans;
  }
}
