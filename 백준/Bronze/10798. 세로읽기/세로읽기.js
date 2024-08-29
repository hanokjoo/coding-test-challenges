const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let arr = new Array(15).fill(0).map(() => new Array());
for (let row of input) {
    row = row.trim();
    for (let i = 0; i < row.length; i++) {
        arr[i].push(row[i]);
    }
}
console.log(arr.reduce((a, c) => {
    a += c.join("");
    return a;
}, ""));