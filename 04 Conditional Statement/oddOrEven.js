import PromptSync from "prompt-sync";
const prompt = PromptSync();
const number = Number(prompt("Enter a number : "));

function evenOrOdd(num) {
  if (num % 2 == 0) {
    console.log("Even Number.");
  } else {
    console.log("Odd Number.");
  }
}
evenOrOdd(number);
