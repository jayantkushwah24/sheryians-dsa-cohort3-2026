import PromptSync from "prompt-sync";
const prompt = PromptSync();
const n = prompt("Enter n : ");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
