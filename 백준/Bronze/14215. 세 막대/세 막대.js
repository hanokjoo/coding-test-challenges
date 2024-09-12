const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const arrToSet = new Set(input);
if (arrToSet.size === 1) {
    console.log(input[0] * 3);
} else {
    input.sort((a, b) => a - b);
    if (input[0] + input[1] > input[2])
        console.log(input[0] + input[1] + input[2]);
    else console.log((input[0] + input[1]) * 2 - 1);
}

