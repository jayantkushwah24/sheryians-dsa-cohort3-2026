function mostWordsFound(sentences) {
  let maxWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    let NumberOfwords = sentences[i].split(" ").length;
    if (NumberOfwords > maxWords) {
      maxWords = NumberOfwords;
    }
  }
  return maxWords;
}
