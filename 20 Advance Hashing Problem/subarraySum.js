/**
 * we will maintain a map(sum , frequency)
 * first we add 0 map(0,1);
 * we will add the current element in sum
 * we will check (sum - k) exist in the map if yes then add the value of that key in the count
 * we will the sum exist in the map as a key or not.if yes then update the frequency (sum , value + 1) if not then set new entry (sum , 1);
 */

function subarraySum(nums, k) {
  let sumMap = new Map();
  sumMap.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let temp = sum - k;
    if (sumMap.has(temp)) {
      count += sumMap.get(temp);
    }
    if (sumMap.has(sum)) {
      sumMap.set(sum, sumMap.get(sum) + 1);
    } else {
      sumMap.set(sum, 1);
    }
  }
  return count;
}

