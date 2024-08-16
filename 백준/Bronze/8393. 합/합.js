let input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim();
input = Number(input);

let answer = 0;
while (input > 0) {
    answer += input;
    input--;
}
console.log(answer);