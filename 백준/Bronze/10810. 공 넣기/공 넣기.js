const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let baskets = new Array(+a.split(" ")[0]).fill(0);
for (let row of input) {
    const [start, end, num] = row.trim().split(" ");
    for (let i = 0; i < baskets.length; i++) {
        if (i >= start - 1 && i < end) {
            baskets[i] = +num;
        }
    }
}
console.log(baskets.join(" "));