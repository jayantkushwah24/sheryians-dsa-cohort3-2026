import PromptSync from "prompt-sync";
const prompt = PromptSync();

const age = prompt("Enter your age : ");

if (age > 18) {
  console.log("Valid voter.");
} else {
  console.log("Invalid voter.");
}
