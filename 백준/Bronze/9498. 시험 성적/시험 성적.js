const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ");

const num = Number(input[0]);
if (num <= 100 && num >= 90) console.log("A");
else if (num <= 89 && num >= 80) console.log("B");
else if (num <= 79 && num >= 70) console.log("C");
else if (num <= 69 && num >= 60) console.log("D");
else console.log("F");