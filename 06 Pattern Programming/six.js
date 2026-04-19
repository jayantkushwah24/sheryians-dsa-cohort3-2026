import PromptSync from "prompt-sync";
const prompt = PromptSync();
const n = prompt("Enter a odd number : ");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (j == i || j == 2 * n - i) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}

// *           *
//  *         *
//   *       *
//    *     *
//     *   *
//      * *
//       *
