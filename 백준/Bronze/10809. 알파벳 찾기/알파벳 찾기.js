const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim();

const alph = "abcdefghijklmnopqrstuvwxyz";
let answer = [];
for (let a of alph) {
    answer.push(input.indexOf(a));
}
console.log(answer.join(" "));