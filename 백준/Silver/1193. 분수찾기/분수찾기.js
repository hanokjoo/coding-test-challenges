const inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

let a = 1; // 갯수
let b = 1; // 누적
while (inputNum > b) {
    b += ++a;
}

if (a % 2 === 0) {
    console.log(a - (b - inputNum) + "/" + (b - inputNum + 1));
} else {
    console.log(b - inputNum + 1 + "/" + (a - (b - inputNum)));
}

