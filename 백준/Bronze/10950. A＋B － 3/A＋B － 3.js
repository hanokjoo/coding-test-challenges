const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let numbers = [];
for (let i = 1; i < input.length; i++) {
    numbers = input[i].trim().split(" ");
    console.log(Number(numbers[0]) + Number(numbers[1]));
}
