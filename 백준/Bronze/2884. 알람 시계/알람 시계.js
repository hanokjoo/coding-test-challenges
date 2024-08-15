const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));

let hour = input[0];
let minute = input[1];

if (input[1] >= 45) {
    minute = input[1] - 45;
} else {
    minute = input[1] + 15;
    hour = input[0] === 0 ? 23 : input[0] - 1;
}

console.log(hour, minute);