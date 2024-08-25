const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ");
// .map(Number);

const sample = [1, 1, 2, 2, 2, 8];
console.log(input.map((e, i) => sample[i] - e).join(" "));
