import PromptSync from "prompt-sync";
const prompt = PromptSync();
const day = Number(prompt("Enter day number : "));

switch (day) {
  case 1:
    console.log("monday");
    break;

  case 2:
    console.log("tuesday");
    break;

  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;

  default:
    console.log("Please enter number from 1 to 7.");
    break;
}
