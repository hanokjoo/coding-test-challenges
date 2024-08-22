const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

for (let row of input) {
    const [count, word] = row.trim().split(" ");
    let answer = "";
    [...word].forEach((e) => (answer += e.repeat(count)));
    console.log(answer);
}