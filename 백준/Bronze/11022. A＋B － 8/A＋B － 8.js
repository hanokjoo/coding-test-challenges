const [_, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

input.forEach((e, i) => {
    const [a, b] = e.split(" ").map(Number);
    console.log("Case #" + (i + 1) + ": " + a + " + " + b + " = " + (a + b));
});
