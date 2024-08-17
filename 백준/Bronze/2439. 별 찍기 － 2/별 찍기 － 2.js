const inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

let star = new Array(inputNum).fill(" ");
for (let i = 1; i <= inputNum; i++) {
    star.shift();
    star.push("*");
    console.log(star.join(""));
}