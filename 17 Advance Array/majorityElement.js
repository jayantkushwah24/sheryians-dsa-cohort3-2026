/**
 * Find the majority element using Boyer-Moore Voting Algorithm.
 * @param {number[]} nums - The input array
 * @return {number} - The majority element
 */
function majorityElement(nums) {
  // Your code here
  let ans = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      ans = nums[i];
    }
    if (nums[i] == ans) {
      count++;
    } else {
      count--;
    }
  }

  return ans;
}

