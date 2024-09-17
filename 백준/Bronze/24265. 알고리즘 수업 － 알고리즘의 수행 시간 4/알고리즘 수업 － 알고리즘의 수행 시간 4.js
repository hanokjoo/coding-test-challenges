let inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

let count = 0;
for (let i = 1; i <= inputNum - 1; i++) {       // 1    2   3   4
    count += inputNum - i  ;                    // 6    5   4   3
}

console.log(count);
console.log(2);