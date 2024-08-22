const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let count = parseInt(a);
for (let i = 0; i < count; i++) {
    const words = input[i].trim();
    console.log(words[0] + words[words.length - 1]);
}
