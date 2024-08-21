const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let baskets = new Array(parseInt(a.trim().split(" ")));
for (let i = 0; i < baskets.length; i++) {
    baskets[i] = i + 1;
}

for (let row of input) {
    const a = row.trim().split(" ").map(Number);
    const first = baskets.slice(0, a[0] - 1);
    const second = baskets.slice(a[0] - 1, a[1]).reverse();
    const third = baskets.slice(a[1]);
    baskets = first.concat(second);
    baskets = baskets.concat(third);
}
console.log(baskets.join(" "));