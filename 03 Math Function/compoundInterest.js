import PromptSync from "prompt-sync";
const prompt = PromptSync();
let principal = prompt("Enter Principal amount : ");
let rate = prompt("Enter Principal rate : ");
let time = prompt("Enter Principal time : ");

function calculateCompoundInterest(principal, rate, time) {
  return (principal * Math.pow(1 + rate / 100, time) - principal).toFixed(2);
}
console.log(calculateCompoundInterest(principal, rate, time));
