function repeatedCharacter(s) {
  let map = new Map();
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return arr[i];
    } else {
      map.set(arr[i], 1);
    }
  }
  return "";
}
