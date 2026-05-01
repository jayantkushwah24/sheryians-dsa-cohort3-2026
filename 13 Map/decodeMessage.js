function decodeMessage(mapping, message) {
  let map = new Map(Object.entries(mapping));
  let messageArr = message.split("");
  let ans = "";
  for (let i = 0; i < messageArr.length; i++) {
    if (map.has(messageArr[i])) {
      ans += map.get(messageArr[i]);
    } else if (messageArr[i] == " ") {
      ans += " ";
    } else {
      ans += messageArr[i];
    }
  }
  return ans;
}

let mapping = new Map();
mapping.set("a", "m");
mapping.set("b", "n");
mapping.set("c", "o");

let message = "abc cab";

console.log(decodeMessage(mapping, message));
