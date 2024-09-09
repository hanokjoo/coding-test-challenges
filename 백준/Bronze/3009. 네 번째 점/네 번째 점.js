const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let x = [];
let y = [];

for (let row of input) {
    row = row.trim().split(" ");
    if (x.indexOf(row[0]) > -1) {
        x[x.indexOf(row[0])] = -1;
    } else x.push(row[0]);

    if (y.indexOf(row[1]) > -1) {
        y[y.indexOf(row[1])] = -1;
    } else y.push(row[1]);
}

console.log(x.filter((e) => e > 0)[0], y.filter((e) => e > 0)[0]);