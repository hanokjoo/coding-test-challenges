const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

for (let row of input) {
    let [a, b] = row.split(" ").map(Number);
    if (a === 0 && b === 0) break;
    if (b % a === 0) console.log("factor");
    else if (a % b === 0) console.log("multiple");
    else console.log("neither");
}