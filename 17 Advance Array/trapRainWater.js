/**
 * @param {number[]} height
 * @return {number}
 */

// bruteforce approach

var trap = function (height) {
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    let leftMax = height[i];
    let rightMax = height[i];
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }
    totalWater += Math.min(rightMax, leftMax) - height[i];
  }
  return totalWater;
};

// better approach

var trap2 = function (height) {
  let totalWater = 0;
  let l = height.length;
  let leftMaxArr = new Array(l);
  let rightMaxArr = new Array(l);
  let leftMax = height[0];
  let rightMax = height[l - 1];

  for (let j = 0; j < l; j++) {
    leftMax = Math.max(leftMax, height[j]);
    leftMaxArr[j] = leftMax;
  }

  for (let k = l - 1; k >= 0; k--) {
    rightMax = Math.max(rightMax, height[k]);
    rightMaxArr[k] = rightMax;
  }
  console.log(leftMaxArr);
  console.log(rightMaxArr);

  for (let i = 0; i < l; i++) {
    totalWater += Math.min(rightMaxArr[i], leftMaxArr[i]) - height[i];
  }
  return totalWater;
};
console.log(trap2([4, 2, 0, 3, 2, 5]));

/**
 * optimal approach
 */
function trap(height) {
  // Write your code here
  let totalWater = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (leftMax < rightMax) {
      totalWater += leftMax - height[left];
      left++;
    } else {
      totalWater += rightMax - height[right];
      right--;
    }
  }
  return totalWater;
}

module.exports = { trap };
