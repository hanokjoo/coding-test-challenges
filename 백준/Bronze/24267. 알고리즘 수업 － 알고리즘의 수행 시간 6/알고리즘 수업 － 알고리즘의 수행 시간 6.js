let inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

if (inputNum > 2) {
    let preSum = 0n;
    let sum = 0n;
    for (let i = 1; i <= inputNum - 2; i++) {
        preSum = preSum + BigInt(i);
        sum = sum + preSum;
    }
    console.log(sum + "");
} else console.log(0);
console.log(3);