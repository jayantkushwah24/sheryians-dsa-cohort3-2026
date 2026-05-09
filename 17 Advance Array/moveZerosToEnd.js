function moveZerosToEnd(arr) {
  // Write your logic here
  let n = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr[n] = 0;
      n--;
    }
  }
  for (let i = 0; i <= n; i++) {
    arr[i] = 1;
  }
}
let arr = [1, 0, 1, 0, 0, 1, 1];
moveZerosToEnd(arr);
console.log(arr);

var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (i != j) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            j++;
        }
    }
};