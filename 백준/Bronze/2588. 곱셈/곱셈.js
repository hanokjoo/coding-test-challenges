const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");
input[0] = input[0].trim();

console.log(Number(input[0]) * Number(input[1][2]));
console.log(Number(input[0]) * Number(input[1][1]));
console.log(Number(input[0]) * Number(input[1][0]));
console.log(Number(input[0]) * Number(input[1]));