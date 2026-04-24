function characterFrequency(str) {
  let arr = new Array(128).fill(0);
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") continue;
    arr[str.charCodeAt(i)] += 1;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(`${String.fromCharCode(i)}: ${arr[i]}`);
    }
  }
}
characterFrequency("hello world");
