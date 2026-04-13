import PromptSync from "prompt-sync";
const prompt = PromptSync();
const a = Number(prompt("Enter the First Number : "));
const b = Number(prompt("Enter the Second Number : "));
const c = Number(prompt("Enter the Third Number : "));

function greatestAmoungThreeNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      console.log(`${a} is the greatest number.`);
    } else {
      console.log(`${c} is the greatest number.`);
    }
  } else {
    if (b > c) {
      console.log(`${b} is the greatest number.`);
    } else {
      console.log(`${c} is the greatest number.`);
    }
  }
}
greatestAmoungThreeNumber(a, b, c);
