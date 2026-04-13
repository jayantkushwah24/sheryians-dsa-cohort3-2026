import PromptSync from "prompt-sync";
const prompt = PromptSync();
const unit = Number(prompt("Enter unit : "));

function calculateElectricityBill(unit) {
  // Write your logic here
  if (unit <= 100) {
    return (unit * 4.2).toFixed(1);
  } else if (unit > 100 && unit <= 200) {
    return (100 * 4.2 + (unit - 100) * 6).toFixed(1);
  } else if (unit > 200 && unit <= 400) {
    return (100 * 4.2 + 100 * 6 + (unit - 200) * 8).toFixed(1);
  } else if (unit > 400) {
    return (100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13).toFixed(1);
  }
}

console.log("Payable Amount : " + calculateElectricityBill(unit));
