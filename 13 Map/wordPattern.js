class Solution {
  wordPattern(pattern, s) {
    let charToWord = new Map();
    let wordToChar = new Map();
    let words = s.split(" ");
    let chars = pattern.split("");

    if (chars.length != words.length) return false;

    for (let i = 0; i < words.length; i++) {
      const char = chars[i];
      const word = words[i];

      if (charToWord.has(char)) {
        if (charToWord.get(char) !== word) return false;
      } else {
        if (wordToChar.has(word)) return false;
        charToWord.set(char, word);
        wordToChar.set(word, char);
      }
    }

    return true;
  }
}

