const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const numbers = input[1].split(" ");
let min = +numbers[0];
let max = +numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (+numbers[i] < min) min = numbers[i];
    if (+numbers[i] > max) max = numbers[i];
}
console.log(min + " " + max);