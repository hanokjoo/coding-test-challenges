const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let students = new Array(31).fill(false);
input.forEach((e) => {
    students[e] = true;
});

for (let i = 1; i < students.length; i++) {
    if (!students[i]) console.log(i);
}
