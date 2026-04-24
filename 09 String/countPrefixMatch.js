function countPrefixMatch(words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(pref)) {
      count++;
    }
  }
  return count;
}
