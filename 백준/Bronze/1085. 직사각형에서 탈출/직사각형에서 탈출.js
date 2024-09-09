const [x, y, w, h] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(
    Math.min(Math.abs(x), Math.abs(y), Math.abs(w - x), Math.abs(h - y))
);