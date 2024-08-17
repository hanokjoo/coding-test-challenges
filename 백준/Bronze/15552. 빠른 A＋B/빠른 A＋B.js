const [_, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = [];
input.forEach((e) => {
    const [a, b] = e.split(" ").map(Number);
    answer.push(a + b);
});
console.log(answer.join("\n"));