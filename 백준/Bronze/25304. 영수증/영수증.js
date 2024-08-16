const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let doTheMath = 0;
let thing = [];
for (let i = 2; i < input.length; i++) {
    thing = input[i].split(" ").map((e) => e.trim());
    doTheMath += thing[0] * thing[1];
}
if (Number(input[0].trim()) === doTheMath) console.log("Yes");
else console.log("No");