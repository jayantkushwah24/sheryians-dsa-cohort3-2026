function twoSum(nums, target) {
  // Your code here
  let map = new Map();
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      ans.push(map.get(target - nums[i]));
      ans.push(i);
      break;
    } else {
      map.set(nums[i], i);
    }
  }
  return ans;
}
