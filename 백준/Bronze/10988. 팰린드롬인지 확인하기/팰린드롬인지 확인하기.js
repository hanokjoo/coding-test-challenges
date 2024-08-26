const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim();

let check = 1;
for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
        check = 0;
        break;
    }
}
console.log(check);