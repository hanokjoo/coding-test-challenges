const [count, ...input] = require("fs").readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n");

let arrA = input[0].replace("\r", "").split(" ").map(Number);
let arrB = input[1].split(" ").map(Number);
let answer = 0;
arrA = arrA.sort((a, b) => b - a);
arrB = arrB.sort((a, b) => a - b);
for (let i = 0; i < arrA.length; i++) {
    answer += arrA[i] * arrB[i];
}

console.log(answer);