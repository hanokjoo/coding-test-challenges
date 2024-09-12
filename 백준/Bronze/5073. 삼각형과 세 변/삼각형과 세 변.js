const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

input.pop();
for (let row of input) {
    row = row.trim().split(" ").map(Number);
    if (row[0] === row[1] && row[1] === row[2]) console.log("Equilateral");
    else {
        row = row.sort((a, b) => b - a);
        if (row[0] >= row[1] + row[2]) console.log("Invalid");
        else if (row[0] !== row[1] && row[1] !== row[2] && row[0] !== row[2])
            console.log("Scalene");
        else console.log("Isosceles");
    }
}
