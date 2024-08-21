const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let scores = input.toString().split(" ").map(Number);
const max = Math.max(...scores);
let sum = scores.reduce((a, c) => {
    a = a + (c / max) * 100;
    return a;
}, 0);
console.log(sum / scores.length);