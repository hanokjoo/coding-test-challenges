const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

if (input.reduce((a, c) => a + c, 0) !== 180) console.log("Error");
else {
    if (input.every((e) => e === 60)) console.log("Equilateral");
    else if (
        input[0] !== input[1] &&
        input[1] !== input[2] &&
        input[0] !== input[2]
    )
        console.log("Scalene");
    else console.log("Isosceles");
}
