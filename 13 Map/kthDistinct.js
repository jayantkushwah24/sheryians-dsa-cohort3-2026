class Solution {
  kthDistinct(arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
      } else {
        map.set(arr[i], 1);
      }
    }
    for (let key of map.keys()) {
      if (map.get(key) == 1) {
        if (k == 1) {
          return key;
        } else {
          k--;
        }
      }
    }
    return "None";
  }
}

