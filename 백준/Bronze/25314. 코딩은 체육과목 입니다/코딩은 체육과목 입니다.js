const inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

let answer = "";
for (let i = 0; i < inputNum / 4; i++) {
    answer += "long ";
}
console.log(answer + "int");
