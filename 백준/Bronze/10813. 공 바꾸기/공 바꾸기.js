const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let baskets = new Array(+a.split(" ")[0]).fill(0).map((e, i) => {
    e = i + 1;
    return e;
});

for (let row of input) {
    const [a, b] = row.trim().split(" ");
    const temp = baskets[b - 1];
    baskets[b - 1] = baskets[a - 1];
    baskets[a - 1] = temp;
}
console.log(baskets.join(" "));