const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", function (input) {
  const num = parseInt(input);
  console.log(testeFibonacci(num));
  rl.close();
});

function testeFibonacci(num) {
  let a = 0, b = 1;
  if (num === 0) return "yes";
  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b === num ? "yes" : "no";
}