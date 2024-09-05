const [a, b, c] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(Math.ceil((c - a) / (a - b)) + 1);
