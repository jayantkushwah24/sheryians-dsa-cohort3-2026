function countAsterisks(s) {
  let count = 0;
  let insidePipe = false;
  let i = 0;
  while (i < s.length) {
    if (s.charAt(i) == "|") {
      insidePipe = !insidePipe;
    }
    if (s.charAt(i) == "*" && insidePipe == false) {
      count++;
      i++;
    } else {
      i++;
    }
  }
  return count;
}
