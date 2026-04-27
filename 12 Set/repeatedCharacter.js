/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const sArr = s.split("");
  let set = new Set();
  for (let i = 0; i < sArr.length; i++) {
    if (set.has(sArr[i])) {
      return sArr[i];
    } else {
      set.add(sArr[i]);
    }
  }
  return "";
};
