import PromptSync from "prompt-sync";
const prompt = PromptSync();
const number = Number(prompt("Enter a number : "));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
