const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .split("\n");

for (let row of input) {
    const numbers = row
        .trim()
        .split(" ")
        .map((e) => Number(e));
    if (numbers[0] === 0 && numbers[1] === 0) break;
    console.log(numbers[0] + numbers[1]);
}