function toggleCase(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    let asciiValue = str.charCodeAt(i);
    if (asciiValue >= 65 && asciiValue <= 90) {
      answer = answer.concat(str.charAt(i).toLowerCase());
    } else if (asciiValue >= 97 && asciiValue <= 122) {
      answer = answer.concat(str.charAt(i).toUpperCase());
    } else {
      answer = answer.concat(str.charAt(i));
    }
  }
  return answer;
}
