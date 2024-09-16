let inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);
console.log(inputNum);
console.log(1);
