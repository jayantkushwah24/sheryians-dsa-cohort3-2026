class Solution {
  minAddForBalance(arr) {
    let sumOfFirstHalf = 0;
    let sumOfSecondHalf = 0;
    for (let i = 0; i < arr.length / 2; i++) {
      sumOfFirstHalf += arr[i];
    }
    for (let j = arr.length / 2; j < arr.length; j++) {
      sumOfSecondHalf += arr[j];
    }
    let minAdd = Math.abs(sumOfFirstHalf - sumOfSecondHalf);
    return minAdd;
  }
}
