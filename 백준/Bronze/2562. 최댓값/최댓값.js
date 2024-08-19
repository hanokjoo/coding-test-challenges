const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let [max, index] = [0, 0];
input.forEach((e, i) => {
    e = parseInt(e);
    if (e > max) {
        max = e;
        index = i + 1;
    }
});
console.log(max + "\n" + index);
