const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));
console.log(input[0] / input[1]);