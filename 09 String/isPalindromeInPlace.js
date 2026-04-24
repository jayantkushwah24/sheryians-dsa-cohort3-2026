function isPalindromeInPlace(str) {
  let a = 0;
  let b = str.length - 1;
  while (a < b) {
    if (str.charAt(a) != str.charAt(b)) {
      return "No";
    }
    a++;
    b--;
  }
  return "Yes";
}
