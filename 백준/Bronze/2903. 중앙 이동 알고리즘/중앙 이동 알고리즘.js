const inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

let answer = 2;
for (let i = inputNum; i > 0; i--) {
    answer = answer * 2 - 1;
}
console.log(Math.pow(answer, 2));