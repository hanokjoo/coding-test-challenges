const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const [cntRow, cntCol] = a.split(" ").map(Number);
let answer = [];
for (let i = 0; i < cntRow; i++) {
    let newRow = [];
    const arr1 = input[i].trim().split(" ");
    const arr2 = input[i + cntRow].trim().split(" ");
    for (let j = 0; j < cntCol; j++) {
        newRow.push(parseInt(arr1[j]) + parseInt(arr2[j]));
    }
    answer.push(newRow);
}
answer.forEach((e) => console.log(e.join(" ")));