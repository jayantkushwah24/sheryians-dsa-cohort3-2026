var checkIfPangram = function (sentence) {
  const sentenceArr = sentence.split("");
  let sentenceSet = new Set(sentenceArr);

  for (let i = 97; i <= 122; i++) {
    if (sentenceSet.has(String.fromCharCode(i)) == false) {
      return false;
    }
  }
  return true;
};
const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence));
