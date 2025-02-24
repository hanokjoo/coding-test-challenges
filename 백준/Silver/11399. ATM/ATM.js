const [count, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const sortedInput = input[0].split(" ").sort((a, b) => Number(a) - Number(b));
let totalWaiting = 0;
sortedInput.reduce((a, c) => {
    a = Number(a);
    c = Number(c);
    totalWaiting += a + c;
    return a + c;
}, 0);

console.log(totalWaiting);
