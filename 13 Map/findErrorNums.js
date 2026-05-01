class Solution {
  findErrorNums(nums) {
    let map = new Map();
    let duplicate = -1;
    let missing = -1;

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }

    for (let key of map.keys()) {
      if (map.get(key) == 2) {
        duplicate = key;
      }
    }
    for (let i = 1; i <= nums.length; i++) {
      if (!map.has(i)) {
        missing = i;
      }
    }
    return [duplicate, missing];
  }
}
