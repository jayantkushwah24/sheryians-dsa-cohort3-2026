class Solution {
  distributeCandies(n, k, candies) {
    let count = 0;
    for (let i = 0; i < candies.length; i++) {
      if (k <= candies[i] && n >= k) {
        count++;
        n = n - k;
      }
    }
    return count;
  }
}
