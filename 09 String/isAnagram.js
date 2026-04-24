function isAnagram(s1, s2) {
  let arr = new Array(128).fill(0);

  if (s1.length != s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) == " ") continue;
    arr[s1.charCodeAt(i)]++;
  }

  for (let i = 0; i < s2.length; i++) {
    if (s2.charAt(i) == " ") continue;
    arr[s2.charCodeAt(i)]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      return false;
    }
  }

  return true;
}
