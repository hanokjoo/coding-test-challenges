const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let arr = [1];
for (let i = 2; i < input[0]; i++) {
    if (input[0] % i === 0) arr.push(i);
    if (arr.length === input[1]) break;
}
arr.push(input[0]);
console.log(arr.length < input[1] ? 0 : arr[input[1] - 1]);
