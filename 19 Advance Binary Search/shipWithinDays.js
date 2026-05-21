/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let ans = -1;
  let start = 1,
    end = 1;
  for (let i = 0; i < weights.length; i++) {
    if (start < weights[i]) {
      start = weights[i];
    }
    end += weights[i];
  }
  while (start <= end) {
    let currCapacity = Math.floor((start + end) / 2);
    let totalWeight = 0;
    let dayCount = 1;
    for (let j = 0; j < weights.length; j++) {
      if (totalWeight + weights[j] <= currCapacity) {
        totalWeight += weights[j];
      } else {
        dayCount++;
        j--;
        totalWeight = 0;
      }
    }
    if (days >= dayCount) {
      ans = currCapacity;
      end = currCapacity - 1;
    } else {
      start = currCapacity + 1;
    }
  }
  return ans;
};
