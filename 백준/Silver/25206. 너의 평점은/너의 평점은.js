const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const sample = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
};
let credit = 0.0;
let grade = 0.0;

for (let row of input) {
    let arr = row.trim().split(" ");
    if (arr[2] !== "P") {
        credit += Number(arr[1]);
        grade += Number(sample[arr[2]]) * Number(arr[1]);
    }
}
console.log(grade / credit);
