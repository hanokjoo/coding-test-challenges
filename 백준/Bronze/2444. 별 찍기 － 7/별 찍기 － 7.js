const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim();

const blank = input - 1;

for (let i = 1; i <= input; i++) {
    console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
}
for (let i = input - 1; i > 0; i--) {
    console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
}
