/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let nums1Map = new Map();
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums1Map.has(nums1[i])) {
      nums1Map.set(nums1[i], nums1Map.get(nums1[i]) + 1);
    } else {
      nums1Map.set(nums1[i], 1);
    }
  }
  for (i = 0; i < nums2.length; i++) {
    if (nums1Map.has(nums2[i])) {
      if (nums1Map.get(nums2[i]) >= 1) {
        nums1Map.set(nums2[i], nums1Map.get(nums2[i]) - 1);
        ans.push(nums2[i]);
      } else {
        nums1Map.delete(nums2[i]);
      }
    }
  }
  return ans;
};
