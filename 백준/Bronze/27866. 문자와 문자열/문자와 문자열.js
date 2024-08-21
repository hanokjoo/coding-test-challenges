const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

console.log(input[0].trim()[parseInt(input[1].trim()) - 1]);
