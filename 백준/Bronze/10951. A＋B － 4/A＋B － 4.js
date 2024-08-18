const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .split("\n");
input.pop();
for (let row of input) {
    const numbers = row.trim().split(" ");
    console.log(Number(numbers[0]) + Number(numbers[1]));
}