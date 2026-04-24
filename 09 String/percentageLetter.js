function percentageLetter(s, letter) {
  let count = 0;
  let wordLength = s.length;
  for (let i = 0; i < wordLength; i++) {
    if (s.charAt(i) == letter) {
      count++;
    }
  }
  let percent = (count / wordLength) * 100;
  return Math.floor(percent);
}
