const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let max = 0;
let [a, b] = [0, 0];
for (let i = 0; i < 9; i++) {
    const row = input[i].trim().split(" ").map(Number);
    for (let j = 0; j < 9; j++) {
        if (row[j] > max) {
            max = row[j];
            [a, b] = [i, j];
        }
    }
}
console.log(max);
console.log([a + 1, b + 1].join(" "));