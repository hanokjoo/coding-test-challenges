let inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

for (let i = 2; i <= inputNum; i++) {
    if (inputNum % i === 0) {
        console.log(i);
        inputNum = inputNum / i;
        i = 1;
    }
}