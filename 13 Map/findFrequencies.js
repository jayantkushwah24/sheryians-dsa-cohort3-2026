class Solution {
  findFrequencies(arr) {
    // Write your code here
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
      } else {
        map.set(arr[i], 1);
      }
    }
    for (let key of map.keys()) {
      console.log(key + " " + map.get(key));
    }
    return "";
  }
}

module.exports = Solution;
