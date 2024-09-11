const [count, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

if (count === 1) console.log(0);

let x_min = Number(input[0].split(" ")[0]);
let x_max = x_min;
let y_min = Number(input[0].split(" ")[1]);
let y_max = y_min;

for (let i = 1; i < count; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    if (x_min > a) x_min = a;
    if (x_max < a) x_max = a;
    if (y_min > b) y_min = b;
    if (y_max < b) y_max = b;
}
console.log((x_max - x_min) * (y_max - y_min));
