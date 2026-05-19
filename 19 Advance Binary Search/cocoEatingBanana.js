/**
 * @param {number[]} piles - Array of banana piles
 * @param {number} h - Total hours available
 * @return {number} - Minimum eating speed k
 */
function minEatingSpeed(piles, h) {
  let ans = -1;
  let start = 1,
    end = 1;
  for (let i = 0; i < piles.length; i++) {
    if (end < piles[i]) {
      end = piles[i];
    }
  }
  while (start <= end) {
    let currSpeed = Math.floor((start + end) / 2);
    let timeTaken = 0;
    for (let j = 0; j < piles.length; j++) {
      timeTaken += Math.ceil(piles[j] / currSpeed);
    }
    if (timeTaken <= h) {
      ans = currSpeed;
      end = currSpeed - 1;
    } else {
      start = currSpeed + 1;
    }
  }
  return ans;
}

