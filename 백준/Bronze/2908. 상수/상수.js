const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ");

console.log(Math.max(parseInt(Array.from(input[0]).reverse().join("")), parseInt(Array.from(input[1]).reverse().join(""))));