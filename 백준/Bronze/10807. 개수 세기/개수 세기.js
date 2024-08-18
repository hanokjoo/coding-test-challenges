const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = 0;
input[1]
    .trim()
    .split(" ")
    .forEach((e) => {
        if (e === input[2]) answer++;
    });
console.log(answer);