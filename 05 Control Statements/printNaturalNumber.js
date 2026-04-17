function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(`${i} `);
  }
}

function printNumbers2(n) {
  for (let i = n; i >= 1; i--) {
    process.stdout.write(`${i} `);
  }
}
