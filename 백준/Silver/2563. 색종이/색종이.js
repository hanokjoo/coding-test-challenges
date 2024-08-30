const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let white = new Array(100).fill(0).map((e) => new Array(100).fill(0));
for (let black of input) {
    let [a, b] = black.trim().split(" ").map(Number);
    for (let i = a; i < a + 10; i++) {
        for (let j = b; j < b + 10; j++) {
            white[j][i]++;
        }
    }
}
console.log(white.flat().filter((e) => e > 0).length);