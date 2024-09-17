let inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);
console.log(BigInt(inputNum) ** 3n + "");
console.log(3);
