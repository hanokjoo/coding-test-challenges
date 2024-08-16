const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));

let numbers = input.reduce((a, c) => {
    if (c in a) a[c]++;
    else a[c] = 1;
    return a;
}, {});

if (Object.keys(numbers).length === 3) {
    console.log(Math.max(...input) * 100);
} else if (Object.keys(numbers).length === 2) {
    const two = Object.keys(numbers).find((key) => numbers[key] === 2);
    console.log(1000 + two * 100);
} else {
    console.log(10000 + input[0] * 1000);
}
