function capitalizeEnds(str) {
  let arrStr = str.split(" ");
  let answer = "";
  if (str.length <= 1) {
    return str.toUpperCase();
  }
  for (let i = 0; i < arrStr.length; i++) {
    answer += arrStr[i].charAt(0).toUpperCase();
    answer += arrStr[i].substring(1, arrStr[i].length - 1);
    answer += arrStr[i].charAt(arrStr[i].length - 1).toUpperCase();
    answer += " ";
  }
  return answer;
}
