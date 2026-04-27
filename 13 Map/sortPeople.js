var sortPeople = function (names, heights) {
  let map = new Map();
  let ans = [];

  for (let i = 0; i < heights.length; i++) {
    map.set(heights[i], names[i]);
  }

  let heightSorted = heights.sort((a, b) => b - a);

  for (let i = 0; i < heights.length; i++) {
    ans.push(map.get(heightSorted[i]));
  }
  return ans;
};
