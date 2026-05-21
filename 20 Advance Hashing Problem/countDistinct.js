/**
 * @param {number[]} arr
 * @param {number} k
 * @return s {number[]}
 */

class Solution {
  countDistinct(arr, k) {
    // code here
    if (arr.length < k) return [];
    let freqMap = new Map();
    let ans = [];
    let i = 0,
      j = k - 1;
    for (let a = 0; a < k; a++) {
      if (freqMap.has(arr[a])) {
        freqMap.set(arr[a], freqMap.get(arr[a]) + 1);
      } else {
        freqMap.set(arr[a], 1);
      }
    }
    ans.push(freqMap.size);
    if (arr.length == k) return ans;

    for (j = k; j < arr.length; j++) {
      if (freqMap.get(arr[i]) >= 2) {
        freqMap.set(arr[i], freqMap.get(arr[i]) - 1);
      } else {
        freqMap.delete(arr[i]);
      }
      i++;
      if (freqMap.has(arr[j])) {
        freqMap.set(arr[j], freqMap.get(arr[j]) + 1);
      } else {
        freqMap.set(arr[j], 1);
      }
      ans.push(freqMap.size);
    }
    return ans;
  }
}
