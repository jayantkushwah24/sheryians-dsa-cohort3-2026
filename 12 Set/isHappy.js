/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();

  while (true) {
    let sum = 0;
    let num = n;
    while (num > 0) {
      let lastDigit = num % 10;
      sum += lastDigit * lastDigit;
      num = Math.floor(num / 10);
    }
    if (sum == 1) {
      return true;
    } else {
      if (set.has(sum)) return false;
      set.add(sum);
      n = sum;
    }
  }
  return false;
};
