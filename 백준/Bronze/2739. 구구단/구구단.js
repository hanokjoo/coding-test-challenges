const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ");

const num = Number(input[0]);
for (let i = 1; i < 10; i++) {
    console.log(num, "*", i, "=", num * i);
}