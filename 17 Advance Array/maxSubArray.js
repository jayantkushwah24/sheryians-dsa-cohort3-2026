function kadane(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Decide:
    // start fresh OR continue previous subarray

    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
    } else {
      currentSum = currentSum + nums[i];
    }

    // Update maximum found so far
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
