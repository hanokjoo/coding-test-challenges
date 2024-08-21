const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let answer = new Set();
for (let i = 0; i < input.length; i++) {
    answer.add(input[i] % 42);
}
console.log(answer.size);