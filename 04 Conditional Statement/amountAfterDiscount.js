import PromptSync from "prompt-sync";
const prompt = PromptSync();
const amount = Number(prompt("Enter amount : "));

function amountAfterDiscount(amount) {
  if (amount <= 5000) {
    console.log(`Final amount : ${amount}`);
  } else if (amount > 5000 && amount <= 7000) {
    console.log(`Final amount after 5% discount: ${amount * 0.95}`);
  } else if (amount > 7000 && amount <= 9000) {
    console.log(`Final amount after 10% discount: ${amount * 0.9}`);
  } else if (amount > 9000) {
    console.log(`Final amount after 20% discount: ${amount * 0.8}`);
  }
}
amountAfterDiscount(amount);
