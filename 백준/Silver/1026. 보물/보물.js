const [count, ...input] = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n");

let arrA = input[0].replace("\r", "").split(" ").map(Number);
const arrB = input[1].split(" ").map(Number);
let arrC = new Array(arrB.length).fill(0);
let [maxVal, maxIndex] = [-1, -1];
let answer = 0;
arrA = arrA.sort((a, b) => b - a);

while (arrA.length > 0) {
    for (let i = 0; i < arrB.length; i++) {
        if (arrC[i] === 0) {
            if (maxVal <= arrB[i]) {
                maxVal = arrB[i];
                maxIndex = i;
            }
        }
    }
    answer += arrA.pop() * arrB[maxIndex];
    arrC[maxIndex]++;
    [maxVal, maxIndex] = [-1, -1];
}

console.log(answer);
