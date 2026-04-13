import PromptSync from "prompt-sync";
const prompt = PromptSync();
const year = prompt("Enter the year : ");

function leapYearOrNot(year) {
  if (year % 400 == 0 && (year % 100 != 0 || year % 4 == 0)) {
    console.log("Leap year.");
  } else {
    console.log("Not a leap year.");
  }
}
leapYearOrNot(year);
