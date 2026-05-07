class Solution {
  kthFactor(n, k) {
    // Write your code here
    let count = 1;
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        if (count == k) return i;
        else count++;
      }
    }
    return -1;
  }
}

module.exports = Solution;
