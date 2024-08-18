const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = [];
const x = +input[0].trim().split(" ")[1];
input[1]
    .trim()
    .split(" ")
    .forEach((e) => {
        if (e < x) answer.push(e);
    });
console.log(answer.join(" "));