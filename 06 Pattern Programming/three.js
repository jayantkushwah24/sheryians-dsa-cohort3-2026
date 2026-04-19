import PromptSync from "prompt-sync";
const prompt = PromptSync();
const n = prompt("Enter n : ");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// * * * * *
// * * * *
// * * *
// * *
// *
