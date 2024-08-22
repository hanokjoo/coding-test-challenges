const [a, str] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");
console.log([...str].reduce((a, c) => a + +c, 0));