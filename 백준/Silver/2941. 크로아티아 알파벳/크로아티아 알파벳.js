let input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim();

const sample = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
sample.forEach((e, i) => input = input.replaceAll(e, i));
console.log(input.length);