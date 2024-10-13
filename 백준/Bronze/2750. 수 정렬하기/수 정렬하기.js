const [count, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let sorted = input.sort((a, b) => a - b);
console.log(sorted.join("\n"));