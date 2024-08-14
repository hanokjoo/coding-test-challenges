const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ");

console.log(
    Number(input[0].trim()) + Number(input[1].trim()) + Number(input[2])
);